<?php

namespace App\Http\Middleware;

use Closure;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;
use PHPOpenSourceSaver\JWTAuth\Exceptions\JWTException;

class JwtMiddleware
{
    public function handle($request, Closure $next)
    {
        // Verifica si el token existe en las cookies
        $token = $_COOKIE['token-auth'] ?? null;

        
        if (!$token) {
            return redirect()->route('login'); // Redirige si no hay token
        }

        try {
            // Intenta autenticar al usuario utilizando el token de las cookies
            $user = JWTAuth::setToken($token)->authenticate();
        } catch (JWTException $e) {
            // Si el token no es válido o no se puede autenticar, retorna un error
            return response()->json(['error' => 'Token no válido o expirado'], 401);
        }

        // Si la autenticación es exitosa, continúa con la solicitud
        return $next($request);
    }
}
