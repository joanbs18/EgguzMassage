<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClienteController;

Route::prefix('clientes')->group(function () {
    Route::get('/', [ClienteController::class, 'index']); // Listar todos los clientes
    Route::get('/count', [ClienteController::class, 'count']);
    Route::get('/{id}', [ClienteController::class, 'show']); // Obtener cliente por ID
    Route::post('/', [ClienteController::class, 'store']); // Crear nuevo cliente
    Route::put('/{id}', [ClienteController::class, 'update']); // Actualizar cliente
    Route::delete('/{id}', [ClienteController::class, 'destroy']); // Eliminar cliente
});

