<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactoMail extends Mailable
{
   use Queueable, SerializesModels;

    public $cita;

    public function __construct($cita)
    {
        $this->cita = $cita;
    }

    public function build()
    {
        return $this->subject('Nueva Cita en Egguz Massage')
                    ->view('emails.contacto');
    }
}
