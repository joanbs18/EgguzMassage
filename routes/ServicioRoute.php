<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ServicioController;
use App\Http\Middleware\JwtMiddleware;

// RUTA PÚBLICA (no requiere token)
Route::get('/servicios', [ServicioController::class, 'index']);

// RUTAS PROTEGIDAS (requieren token)
Route::middleware([JwtMiddleware::class])->prefix('servicios')->group(function () {
    Route::get('/{id}', [ServicioController::class, 'show']);
    Route::post('/', [ServicioController::class, 'store']);
    Route::put('/{id}', [ServicioController::class, 'update']);
    Route::delete('/{id}', [ServicioController::class, 'destroy']);
});
