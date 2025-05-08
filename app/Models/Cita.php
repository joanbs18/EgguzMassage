<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Facades\DB;

class Cita extends Model
{
    use HasFactory;

    // Nombre de la tabla
    protected $table = 'cita';

    // Llave primaria
    protected $primaryKey = 'id_cita';






    // Campos permitidos para asignación masiva
    protected $fillable = [
        'id_cita',
        'id_servicio', 
        'fecha', 
        'hora', 
        'estado',
        'cliente_cedula', 
        'cliente_nombre', 
        'cliente_telefono', 
        'cliente_email'
    ];
    

    // Relación con el servicio (sin cambios)
    public function servicio()
    {
        return $this->belongsTo(Servicio::class, 'id_servicio', 'id_servicio');
    }

   

public static function citaMasProxima()
{
    // Llamar al procedimiento almacenado
    $resultados = DB::select("CALL citaMasProxima()");


    return $resultados;
}

public static function clientesUnicos()
{
    return DB::select("CALL clientesUnicos()");
}

public static function citasPorMes()
{
    return DB::select('CALL sp_citas_por_mes()');
}




    // Ya no es necesario tener la relación con Cliente, ya que la información del cliente está incluida en la tabla 'cita'
}
