<?php
namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Cita; // Asegúrate de que el modelo exista
use Illuminate\Support\Facades\Mail;
use App\Mail\RecordatorioCita; // Asegúrate de tener la clase RecordatorioCita creada


class RecordatorioCitas extends Command
{
    protected $signature = 'recordatorio:citas';

    protected $description = 'Enviar recordatorio de citas para hoy';

    public function handle()
    {
        // Obtener las citas activas programadas para hoy
        $hoy = now()->toDateString(); // Fecha de hoy
        $citas = Cita::where('fecha', $hoy)
                     ->where('estado', 1)  // Asegúrate de que el estado de la cita sea 'activa' (estado 1)
                     ->get();

        // Enviar recordatorio a cada cita
        foreach ($citas as $cita) {
            // Aquí puedes enviar un correo, SMS o cualquier otro tipo de recordatorio
            $this->enviarRecordatorio($cita);
        }

        $this->info('Recordatorios enviados para las citas de hoy.');
    }

    private function enviarRecordatorio($cita)
    {
        // Lógica para enviar el recordatorio (correo, mensaje, etc.)
        // Por ejemplo:
        Mail::to($cita->cliente_email)->send(new RecordatorioCita($cita)); // Asegúrate de tener un Mail configurado
    }
}