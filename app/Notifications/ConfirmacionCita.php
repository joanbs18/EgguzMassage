<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use App\Models\Cita;

class ConfirmacionCita extends Notification
{
    use Queueable;

    protected $cita;

    public function __construct(Cita $cita)
    {
        $this->cita = $cita;
    }

    public function via($notifiable)
    {
        return ['mail']; // Esto indica que solo usaremos correo
    }

    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->subject('Confirmación de tu cita')
            ->greeting('¡Hola ' . $this->cita->cliente->nombre . '!')
            ->line('Tu cita está confirmada para el ' . $this->cita->fecha . ' a las ' . $this->cita->hora . '.')
            ->line('Servicio: ' . $this->cita->servicio->nombre)
            ->line('Terapeuta: ' . $this->cita->servicio->terapeuta->nombre) // Asumiendo que tienes la relación con el terapeuta
            ->action('Ver detalles de la cita', url('/citas/' . $this->cita->id_cita))
            ->line('Si necesitas hacer algún cambio o cancelación, contáctanos al número de teléfono que aparece en nuestra página web.');
    }
}
