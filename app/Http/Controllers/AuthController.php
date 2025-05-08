<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;
use PHPOpenSourceSaver\JWTAuth\Exceptions\TokenExpiredException;
use PHPOpenSourceSaver\JWTAuth\Exceptions\TokenInvalidException;
use PHPOpenSourceSaver\JWTAuth\Exceptions\JWTException;


class AuthController extends Controller
{
    /**
     * Registro de usuarios
     */
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);


        return response()->json(['message' => 'Usuario registrado y logueado']);
    }

    /**
     * Login de usuarios
     */
    public function login(Request $request)
    {

      
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        
        try {
            if (!$token = JWTAuth::attempt($request->only('email', 'password'))) {
                return response()->json(['error' => 'Unauthorized'], 401);
            }
        } catch (\Exception $e) {
            return response()->json(['error' => 'Could not create token'], 500);
        }

    
        $cookie = cookie(
            'token-auth',
            $token,
            60,
            '/',
            null,
            true,   // secure
            true,   // httpOnly
            false,  // raw
            'strict'
        );


        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
        ])->withCookie($cookie);
    }


    /**
     * Logout: invalidar el token
     */
    public function logout(Request $request)
    {
        try {
            $token = $request->cookie('token-auth');

            if (!$token) {
                return response()->json(['message' => 'Token no encontrado.'], 400);
            }

            JWTAuth::setToken($token)->invalidate();
        } catch (JWTException $e) {
            return response()->json(['message' => 'Error al cerrar sesión.'], 500);
        }

        // Eliminar la cookie
        $cookie = cookie(
            'token-auth',
            '',
            -1,
            '/',
            null,
            true,
            true,
            false,
            'Strict'
        );

        return response()->json(['message' => 'Sesión cerrada'])->withCookie($cookie);
    }

    /**
     * Obtener el perfil del usuario autenticado
     */
    public function perfil(Request $request)
    {
        $user = JWTAuth::parseToken()->authenticate();

        return response()->json($user);
    }

    public function checkAuth(Request $request)
    {
        try {
            // Extraer el token desde la cookie
            $token = $request->cookie('token-auth');

            if (!$token) {
                return response()->json(['authenticated' => false, 'message' => 'Token no encontrado'], 401);
            }

            // Pasar el token manualmente
            $user = JWTAuth::setToken($token)->authenticate();

            return response()->json(['authenticated' => true]);
        } catch (TokenExpiredException $e) {
            return response()->json(['authenticated' => false, 'message' => 'Token expirado'], 401);
        } catch (TokenInvalidException $e) {
            return response()->json(['authenticated' => false, 'message' => 'Token inválido'], 401);
        } catch (JWTException $e) {
            return response()->json(['authenticated' => false, 'message' => 'Error al procesar el token'], 401);
        }
    }
}
