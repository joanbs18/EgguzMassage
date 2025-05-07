<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Cliente extends Model
{
    use HasFactory;

    // Nombre de la tabla
    protected $table = 'cliente';

    // Llave primaria
    protected $primaryKey = 'id_cliente';

    // Indica que la llave primaria no es incremental
    public $incrementing = false;

    // Tipo de la llave primaria (varchar/string)
    protected $keyType = 'string';

    // Campos permitidos para asignación masiva
    protected $fillable = ['id_cliente', 'cedula', 'nombre', 'telefono', 'email'];

    // Relación con Citas
    public function citas()
    {
        return $this->hasMany(Cita::class, 'id_cliente', 'id_cliente');
    }
}
