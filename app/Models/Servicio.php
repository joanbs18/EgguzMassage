<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Servicio extends Model
{
    use HasFactory;

    // Nombre de la tabla
    protected $table = 'servicio';

    // Llave primaria
    protected $primaryKey = 'id_servicio';

    // Campos permitidos para asignación masiva
    protected $fillable = ['id_servicio', 'nombre_servicio', 'duracion', 'descripcion'];

    // Relación con Citas
    public function citas()
    {
        return $this->hasMany(Cita::class, 'id_servicio', 'id_servicio');
    }
}
