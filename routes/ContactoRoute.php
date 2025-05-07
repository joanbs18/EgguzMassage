
<?php
use App\Http\Controllers\ContactoController;
use Illuminate\Support\Facades\Route;

Route::middleware('throttle:3,60')->post('/contacto', [ContactoController::class, 'enviar']);

