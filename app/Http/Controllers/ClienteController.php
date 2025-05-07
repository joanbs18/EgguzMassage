<?php

namespace App\Http\Controllers;

use App\Models\Cliente;
use Illuminate\Http\Request;

class ClienteController extends Controller
{
    // Listar todos los clientes
    public function index()
    {
        $clientes = Cliente::all();
        return response()->json($clientes);
        
    }

    // Obtener un cliente por ID
    public function show($id)
    {
        $cliente = Cliente::find($id);

        if ($cliente) {
            return response()->json($cliente);
        } else {
            return response()->json(['message' => 'Cliente no encontrado'], 404);
        }
    }

    // Crear un nuevo cliente
    public function store(Request $request)
    {
        $cliente = Cliente::create($request->all());
        
        return response()->json($cliente, 201);
    }

    // Actualizar un cliente
    public function update(Request $request, $id)
    {
        $cliente = Cliente::find($id);

        if ($cliente) {
            $cliente->update($request->all());
            return response()->json($cliente);
        } else {
            return response()->json(['message' => 'Cliente no encontrado'], 404);
        }
    }

    // Eliminar un cliente
    public function destroy($id)
    {
        $cliente = Cliente::find($id);

        if ($cliente) {
            $cliente->delete();
            return response()->json(['message' => 'Cliente eliminado']);
        } else {
            return response()->json(['message' => 'Cliente no encontrado'], 404);
        }
    }

        // Obtener el número total de clientes
        public function count()
        {
            $totalClientes = Cliente::count();
            return response()->json(['total_clientes' => $totalClientes], 200);
        }
}
