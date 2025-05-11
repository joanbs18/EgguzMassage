<?php

namespace App\Http\Controllers;

use App\Models\Cita;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Mail\ConfirmacionCita;
use Illuminate\Support\Facades\Mail;
use Carbon\Carbon;

class CitaController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'id_servicio' => 'required|integer|exists:servicio,id_servicio',
            'fecha' => 'required|date',
            'hora' => 'required|date_format:H:i:s',
            'estado' => 'required|boolean',
            'descripcion' => 'string',
            'cliente_cedula' => 'required|string|max:20',
            'cliente_nombre' => 'required|string|max:100',
            'cliente_telefono' => 'required|string|max:15',
            'cliente_email' => 'required|string|email|max:100',
        ]);

        // Validación de cita duplicada
        $yaExiste = Cita::where('id_servicio', $validated['id_servicio'])
            ->where('fecha', $validated['fecha'])
            ->where('hora', $validated['hora'])
            ->exists();

        if ($yaExiste) {
            return response()->json(['message' => 'Ya existe una cita en ese horario para ese servicio'], 409);
        }

        // Agregar campo vacío para activar el trigger
        $validated['id_cita'] = ''; // <- activa el trigger

        // Crear la cita
        $cita = Cita::create($validated);
        $cita->load('servicio');
        dd($validated);
        Mail::to($validated['cliente_email'])->send(new ConfirmacionCita($validated));
        return response()->json(['message' => 'Cita creada exitosamente', 'cita' => $cita], 201);
    }



    // Obtener todas las citas (de más nueva a más vieja) incluyendo el nombre del servicio
    public function index()
    {
        $citas = Cita::with('servicio')
            ->orderBy('fecha', 'desc')
            ->orderBy('hora', 'desc')
            ->get();

        return response()->json($citas, 200);
    }


    public function indexHoy()
    {
        // Obtener la fecha actual en zona horaria de Costa Rica
        $hoy = Carbon::now('America/Costa_Rica')->toDateString();



        $citasHoy = Cita::where('fecha', $hoy)->get();

        if ($citasHoy->isEmpty()) {
            return response()->json([], 200);
        }


        return response()->json($citasHoy, 200);
    }

    // Obtener una cita por ID
    public function show($id)
    {
        $cita = Cita::find($id);
        if (!$cita) {
            return response()->json(['message' => 'Cita no encontrada'], 404);
        }
        return response()->json($cita, 200);
    }

    // Actualizar una cita
    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'id_servicio' => 'integer|exists:servicio,id_servicio',
            'fecha' => 'date',
            'hora' => 'date_format:H:i:s',
            'estado' => 'boolean',
            'descripcion' => 'string',
            'cliente_cedula' => 'string|max:20',
            'cliente_nombre' => 'string|max:100',
            'cliente_telefono' => 'string|max:15',
            'cliente_email' => 'string|email|max:100',
        ]);
        $validated['id_cita'] = (string) Str::uuid();

        $cita = Cita::find($id);
        if (!$cita) {
            return response()->json(['message' => 'Cita no encontrada'], 404);
        }

        $cita->update($validated);
        return response()->json(['message' => 'Cita actualizada exitosamente', 'cita' => $cita], 200);
    }

    // Eliminar una cita
    public function destroy($id)
    {
        $cita = Cita::find($id);
        if (!$cita) {
            return response()->json(['message' => 'Cita no encontrada'], 404);
        }

        $cita->delete();
        return response()->json(['message' => 'Cita eliminada exitosamente'], 200);
    }


    // Obtener el número total de citas
    public function count()
    {
        $totalCitas = Cita::count();
        return response()->json(['total_citas' => $totalCitas], 200);
    }

    public function citasMensuales()
    {
        $mesActual = now()->startOfMonth();
        $mesAnterior = now()->subMonth()->startOfMonth();

        $citasMesActual = Cita::where('fecha', '>=', $mesActual)->count();
        $citasMesAnterior = Cita::where('fecha', '>=', $mesAnterior)
            ->where('fecha', '<', $mesActual)
            ->count();

        return response()->json([
            'citas_mes_actual' => $citasMesActual,
            'citas_mes_anterior' => $citasMesAnterior,
        ]);
    }

    // Obtener la cita más próxima
    public function citaMasProxima()
    {

        $resultados = Cita::citaMasProxima();


        if (isset($resultados[0]->message)) {
            return response()->json(['message' => $resultados[0]->message], 200);
        }


        return response()->json(['cita_proxima' => $resultados[0]], 200);
    }

    public function countClientes()
    {
        $totalClientesUnicos = Cita::distinct('cliente_cedula')->count('cliente_cedula');
        return response()->json(['total_clientes_unicos' => $totalClientesUnicos], 200);
    }

    public function clienteConMasCitas()
    {
        $clienteMasCitas = Cita::select('cliente_cedula', 'cliente_nombre')
            ->selectRaw('COUNT(*) as total_citas')
            ->groupBy('cliente_cedula', 'cliente_nombre')
            ->orderByDesc('total_citas')
            ->first();

        if (!$clienteMasCitas) {
            return response()->json(['message' => 'No hay citas registradas'], 201);
        }

        return response()->json([
            'cliente_cedula' => $clienteMasCitas->cliente_cedula,
            'cliente_nombre' => $clienteMasCitas->cliente_nombre,
            'total_citas' => $clienteMasCitas->total_citas
        ], 200);
    }

    public function obtenerClientesUnicos()
    {
        $clientes = Cita::clientesUnicos();
        return response()->json($clientes);
    }

    public function citasPorMes()
    {
        $citasPorMes = Cita::citasPorMes();

        if (isset($citasPorMes[0]->message)) {
            return response()->json(['message' => $citasPorMes[0]->message], 200);
        }

        // Si no hay citas, devolver un mensaje
        if (empty($citasPorMes)) {
            return response()->json(['message' => 'No hay citas registradas'], 200);
        }
        return response()->json($citasPorMes);
    }
}
