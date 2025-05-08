<?php

namespace App\Mail;
namespace App\Mail;

use App\Models\Cita;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class RecordatorioCita extends Mailable
{
    use Queueable, SerializesModels;

    public $cita;

    /**
     * Create a new message instance.
     *
     * @param Cita $cita
     * @return void
     */
    public function __construct(Cita $cita)
    {
        $this->cita = $cita;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('Recordatorio de cita')
                    ->view('emails.recordatorio')
                    ->with([
                        'cliente_nombre' => $this->cita->cliente_nombre,
                        'fecha' => $this->cita->fecha,
                        'hora' => $this->cita->hora,
                        'servicio' => $this->cita->servicio->nombre ?? 'Servicio no disponible',
                    ]);
    }
}
