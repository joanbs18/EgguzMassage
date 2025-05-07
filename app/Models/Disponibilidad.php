<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
class Disponibilidad extends Model
{
    use HasFactory;

 
    protected $table = 'disponibilidad';

    // Atributos que se pueden asignar masivamente
    protected $fillable = [
        'dia',
        'horario_inicio',
        'horario_fin',
        'disponible',
    ];

    // (Opcional) Si no utilizas las columnas `created_at` y `updated_at`
    public $timestamps = true; 
}
