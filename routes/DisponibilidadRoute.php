<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DisponibilidadController;
use App\Http\Middleware\JwtMiddleware;

// Rutas de Disponibilidad
Route::prefix('disponibilidad')->group(function () {

    // 🔓 Ruta pública (sin JWT): consultar horas disponibles por fecha y día
    Route::get('/horas-horario/{fecha}/{dia}', [DisponibilidadController::class, 'horasDisponibles'])
        ->name('disponibilidad.horasDisponibles');

    // 🔒 Rutas protegidas con JWTMiddleware
    Route::middleware([JwtMiddleware::class])->group(function () {
        Route::get('/', [DisponibilidadController::class, 'index'])->name('disponibilidad.index'); // Listar todas
        Route::post('/', [DisponibilidadController::class, 'store'])->name('disponibilidad.store'); // Crear nueva
        Route::get('/{id}', [DisponibilidadController::class, 'show'])->name('disponibilidad.show'); // Obtener por ID
        Route::put('/{id}', [DisponibilidadController::class, 'update'])->name('disponibilidad.update'); // Actualizar por ID
        Route::delete('/{id}', [DisponibilidadController::class, 'destroy'])->name('disponibilidad.destroy'); // Eliminar por ID
    });

});