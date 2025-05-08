<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CitaController;
use App\Http\Middleware\JWTMiddleware;

Route::prefix('citas')->group(function () {

    // Aplicar límite de 2 peticiones por minuto a creación de citas
    Route::post('/', [CitaController::class, 'store']);

    Route::middleware([JWTMiddleware::class, 'throttle:60,1'])->group(function () {
        Route::get('/', [CitaController::class, 'index']);
        Route::get('/count', [CitaController::class, 'count']);
        Route::get('/hoy', [CitaController::class, 'indexHoy']);
        Route::get('/cliente-unicos', [CitaController::class, 'obtenerClientesUnicos']);
        Route::get('/citas-mensuales', [CitaController::class, 'citasPorMes']);
        Route::get('/cliente-mas-citas', [CitaController::class, 'clienteConMasCitas']);
        Route::get('/clientes', [CitaController::class, 'countClientes']);
        Route::get('/mensuales', [CitaController::class, 'citasMensuales']);
        Route::get('/proxima', [CitaController::class, 'citaMasProxima']);
        Route::get('/{id}', [CitaController::class, 'show']);
        Route::put('/{id}', [CitaController::class, 'update']);
        Route::delete('/{id}', [CitaController::class, 'destroy']);
    });
});
