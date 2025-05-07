<?php

use Illuminate\Support\Facades\Route;
use App\Http\Middleware\JwtMiddleware;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/citas', function () {
    return view('citas');
});

Route::get('/contacto', function () {
    return view('citas');
});

Route::get('/servicios', function () {
    return view('citas');
});

Route::get('/nosotros', function () {
    return view('welcome');
});

Route::get('/login', function () {
    return view('login');
})->name('login');

// Rutas que requieren autenticación a través de JWT
Route::middleware(JwtMiddleware::class)->group(function () {
        Route::get('/admin', function () {
        return view('admin');
    });

    Route::get('/admin/citas', function () {
        return view('admin');
    });

    Route::get('/admin/gestion', function () {
        return view('admin');
    });

    Route::get('/admin/clientes', function () {
        return view('admin');
    });

    Route::get('/admin/servicios', function () {
        return view('admin');
    });
});
