<?php

namespace App\Http\Controllers;

use App\Models\Servicio;
use Illuminate\Http\Request;

class ServicioController extends Controller
{
    // Listar todos los servicios
    public function index()
    {
        return Servicio::all();
    }

    // Obtener un servicio por ID
    public function show($id)
    {
        $servicio = Servicio::find($id);

        if ($servicio) {
            return response()->json($servicio);
        } else {
            return response()->json(['message' => 'Servicio no encontrado'], 404);
        }
    }

    // Crear un nuevo servicio
    public function store(Request $request)
    {
        $servicio = Servicio::create($request->all());
        return response()->json($servicio, 201);
    }

    // Actualizar un servicio
    public function update(Request $request, $id)
    {
        $servicio = Servicio::find($id);

        if ($servicio) {
            $servicio->update($request->all());
            return response()->json($servicio);
        } else {
            return response()->json(['message' => 'Servicio no encontrado'], 404);
        }
    }

    // Eliminar un servicio
    public function destroy($id)
    {
        $servicio = Servicio::find($id);

        if ($servicio) {
            $servicio->delete();
            return response()->json(['message' => 'Servicio eliminado']);
        } else {
            return response()->json(['message' => 'Servicio no encontrado'], 404);
        }
    }
}
