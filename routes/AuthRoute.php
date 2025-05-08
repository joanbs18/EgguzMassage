<?php


use Illuminate\Support\Facades\Route;
use App\Http\Middleware\JwtMiddleware; 
use App\Http\Controllers\AuthController;


// Otras rutas públicas
Route::post('/login', [AuthController::class, 'login']);
// Route::post('/register', [AuthController::class, 'register']);

Route::middleware([JwtMiddleware::class])->group(function () {
    Route::get('/perfil', [AuthController::class, 'perfil']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/check-auth', [AuthController::class, 'checkAuth']);

});


