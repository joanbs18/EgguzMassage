<h1>Confirmación de Cita</h1>
<p>Hola {{ $cita['cliente_nombre'] }},</p>

<p>Tu cita ha sido registrada exitosamente.</p>

<ul>
  <li><strong>Servicio:</strong> {{ $cita['id_servicio'] }}</li>
  <li><strong>Fecha:</strong> {{ $cita['fecha'] }}</li>
  <li><strong>Hora:</strong> {{ $cita['hora'] }}</li>
</ul>

<p>Gracias por utilizar nuestros servicios.</p>
