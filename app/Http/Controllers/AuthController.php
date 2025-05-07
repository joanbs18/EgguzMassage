<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Validator;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Log;
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

        // Autologin
        $token = JWTAuth::fromUser($user);
        $cookie = cookie('token', $token, 60, null, null, true, true, false, 'Strict');

        return response()->json(['message' => 'Usuario registrado y logueado'])->withCookie($cookie);
    }

    /**
     * Login de usuarios
     */
   /**
     * Login de usuarios
     */
    public function login(Request $request)
    {
     
        // Comprobar si el email y la contraseña están presentes
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);
    
        // Intentar generar el token para el usuario
        try {
            if (!$token = JWTAuth::attempt($request->only('email', 'password'))) {
                return response()->json(['error' => 'Unauthorized'], 401);
            }
        } catch (\Exception $e) {
            return response()->json(['error' => 'Could not create token'], 500);
        }
    
        // Crear la cookie con el token (expiración de 60 minutos, para mayor seguridad, puedes hacer que la cookie sea solo accesible a través de HTTP)
        $cookie = cookie('token-auth', $token, 60, '/', null, false, false, false, null);
    
        // Retornar el token en la respuesta con la cookie
        // return response()->json(['message' => 'Login exitoso'])->withCookie($cookie);
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
            $token = $request->cookie('token');
            JWTAuth::setToken($token)->invalidate();
        } catch (JWTException $e) {
            return response()->json(['message' => 'Error al cerrar sesión.'], 500);
        }

        // Eliminar la cookie
        $cookie = cookie('token', '', -1);

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
        if ($request->user()) {
            return response()->json(['authenticated' => true]);
        }

        return response()->json(['authenticated' => false]);
    }
}
