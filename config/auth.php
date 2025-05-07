<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Authentication Defaults
    |--------------------------------------------------------------------------
    |
    | This option defines the default authentication "guard" and password
    | reset "broker" for your application. You may change these values
    | as required, but they're a perfect start for most applications.
    |
    */

    'defaults' => [
        // Cambia el guard a "api" para usar JWT en lugar de "web"
        'guard' => env('AUTH_GUARD', 'api'), // Utilizando JWT como guard predeterminado
        'passwords' => env('AUTH_PASSWORD_BROKER', 'users'),
    ],

    /*
    |--------------------------------------------------------------------------
    | Authentication Guards
    |--------------------------------------------------------------------------
    |
    | Define every authentication guard for your application.
    |
    | Aquí se cambia la configuración para usar JWT con el guard "api"
    | en lugar de "web" con sesiones.
    |
    */

    'guards' => [
        // "web" es para sesiones de navegador, no se usará si estás usando JWT
        'web' => [
            'driver' => 'session',
            'provider' => 'users',
        ],

        // Guard de API que usará JWT
        'api' => [
            'driver' => 'jwt', // Usando JWT como driver de autenticación
            'provider' => 'users',
            'hash' => false,
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | User Providers
    |--------------------------------------------------------------------------
    |
    | Define cómo los usuarios son recuperados de la base de datos para ser
    | autenticados. Laravel soporta varios proveedores como Eloquent y
    | base de datos.
    |
    */

    'providers' => [
        'users' => [
            'driver' => 'eloquent',  // Usando Eloquent para acceder al modelo User
            'model' => env('AUTH_MODEL', App\Models\User::class),
        ],

        // También puedes configurar un proveedor para base de datos si lo necesitas
        // 'users' => [
        //     'driver' => 'database',
        //     'table' => 'users',
        // ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Resetting Passwords
    |--------------------------------------------------------------------------
    |
    | Configuración de restablecimiento de contraseñas. Define la expiración y
    | el comportamiento de los tokens de restablecimiento.
    |
    */

    'passwords' => [
        'users' => [
            'provider' => 'users',
            'table' => env('AUTH_PASSWORD_RESET_TOKEN_TABLE', 'password_reset_tokens'),
            'expire' => 60, // Expiración de 60 minutos para los tokens de restablecimiento
            'throttle' => 60, // Tiempo de espera antes de generar nuevos tokens
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Password Confirmation Timeout
    |--------------------------------------------------------------------------
    |
    | Aquí defines la cantidad de tiempo antes de que expire la ventana de
    | confirmación de contraseña.
    |
    */

    'password_timeout' => env('AUTH_PASSWORD_TIMEOUT', 10800), // Timeout de 3 horas

];
