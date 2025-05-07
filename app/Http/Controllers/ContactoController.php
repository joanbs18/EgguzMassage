<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactoMail;

class ContactoController extends Controller
{
    public function enviar(Request $request)
    {
        $validated = $request->validate([
            'nombre' => 'required|string|max:255',
            'numero' => 'required|string|max:20',
            'mensaje' => 'required|string',
            'captcha' => 'required',
        ]);
    
        $response = \Illuminate\Support\Facades\Http::asForm()->post('https://www.google.com/recaptcha/api/siteverify', [
            'secret' => env('RECAPTCHA_SECRET_KEY'), 
            'response' => $validated['captcha'],
        ]);
    
    
        if (!$response->json('success')) {
            return response()->json(['error' => 'reCAPTCHA falló'], 422);
        }


        Mail::to('elberth@egguzmassage.com')->send(new ContactoMail($validated));
    
        // Aquí procesas el mensaje, envías correo, etc.
    
        return response()->json(['message' => 'Mensaje recibido con éxito.']);
    }
    
}
