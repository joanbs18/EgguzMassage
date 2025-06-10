<?php

namespace App\Http\Controllers;

use App\Models\Disponibilidad;
use App\Models\Cita;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Carbon\CarbonTimeZone;


class DisponibilidadController extends Controller
{
    // Crear una nueva disponibilidad
    public function store(Request $request)
    {
        $validated = $request->validate([
            'dia' => 'required|string|max:20',
            'horario_inicio' => 'required|date_format:H:i:s',
            'horario_fin' => 'required|date_format:H:i:s|after:horario_inicio',
            'disponible' => 'required|boolean',
        ]);

        $disponibilidad = Disponibilidad::create($validated);
        return response()->json(['message' => 'Disponibilidad creada exitosamente', 'disponibilidad' => $disponibilidad], 201);
    }

    // Obtener todas las disponibilidades
    public function index()
    {
        $disponibilidades = Disponibilidad::all();
        return response()->json($disponibilidades, 200);
    }

    // Obtener una disponibilidad por ID
    public function show($id)
    {
        $disponibilidad = Disponibilidad::find($id);
        if (!$disponibilidad) {
            return response()->json(['message' => 'Disponibilidad no encontrada'], 404);
        }
        return response()->json($disponibilidad, 200);
    }

    // Actualizar una disponibilidad
    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'dia' => 'string|max:20',
            'horario_inicio' => 'date_format:H:i:s',
            'horario_fin' => 'date_format:H:i:s|after:horario_inicio',
            'disponible' => 'boolean',
        ]);

        $disponibilidad = Disponibilidad::find($id);
        if (!$disponibilidad) {
            return response()->json(['message' => 'Disponibilidad no encontrada'], 404);
        }

        $disponibilidad->update($validated);
        return response()->json(['message' => 'Disponibilidad actualizada exitosamente', 'disponibilidad' => $disponibilidad], 200);
    }

    // Eliminar una disponibilidad
    public function destroy($id)
    {
        $disponibilidad = Disponibilidad::find($id);
        if (!$disponibilidad) {
            return response()->json(['message' => 'Disponibilidad no encontrada'], 404);
        }

        $disponibilidad->delete();
        return response()->json(['message' => 'Disponibilidad eliminada exitosamente'], 200);
    }

    public function horasDisponibles($fecha, $dia)
    {
        $disponibilidad = Disponibilidad::where('dia', $dia)->first();

        if (!$disponibilidad) {
          
            return response()->json(['horas_disponibles' => []], 200);
        }

        $horario_inicio = Carbon::parse($disponibilidad->horario_inicio);
        $horario_fin = Carbon::parse($disponibilidad->horario_fin);

       
        $intervalos = [];
        while ($horario_inicio <= $horario_fin) {
            $intervalos[] = $horario_inicio->format('H:i:s');
            $horario_inicio->addMinutes(60);
        }

       
        $horas_disponibles = $this->revicionHora($fecha, $intervalos);

       
        if (empty($horas_disponibles)) {
            return response()->json(['horas_disponibles' => []], 200);
        }

        return response()->json([
            'horas_disponibles' => $horas_disponibles
        ], 200);
    }

    private function revicionHora($fecha, $horas)
    {
        $zonaCR = new CarbonTimeZone('America/Costa_Rica');
        $ahora = Carbon::now($zonaCR);
        $fechaHoy = $ahora->toDateString();
    
        // Si la fecha es hoy, filtra las horas pasadas
        if ($fecha === $fechaHoy) {
            $horas = array_filter($horas, function ($hora) use ($ahora) {
                return Carbon::createFromFormat('H:i:s', $hora, 'America/Costa_Rica')->greaterThan($ahora);
            });
    
            $horas = array_values($horas); 
        }
    
        $citas = Cita::where('fecha', $fecha)->get(); 
        $horas_disponibles = $horas; 
    
        foreach ($citas as $cita) {
            $horaCita = Carbon::createFromFormat('H:i:s', $cita['hora']); 
            $duracion = $cita['servicio']['duracion']; 
    
            foreach ($horas as $hora) {
                $horaVerificar = Carbon::createFromFormat('H:i:s', $hora);
    
                if ($horaCita->eq($horaVerificar)) {
                    $horas_disponibles = $this->validarHoras($horas_disponibles, $hora, $duracion);
                }
            }
        }
    
        return $horas_disponibles;
    }
    


    function validarHoras($horas, $horaCita, $duracion)
    {
        $horaCitaTimestamp = strtotime($horaCita);
        $horaFinCitaTimestamp = $horaCitaTimestamp + ($duracion * 60);

        // Filtrar las horas disponibles
        $horasFiltradas = array_filter($horas, function ($hora) use ($horaCitaTimestamp, $horaFinCitaTimestamp) {
            $horaTimestamp = strtotime($hora);
            return !($horaTimestamp >= $horaCitaTimestamp && $horaTimestamp < $horaFinCitaTimestamp);
        });

        return array_values($horasFiltradas); // Reindexar el array
    }
}
