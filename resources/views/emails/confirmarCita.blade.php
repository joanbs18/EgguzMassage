<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Confirmación de Cita</title>
    <style>
        /* Estilos para el botón */
        .google-calendar-btn, .google-maps-btn {
            background-color: #4285F4; /* Azul de Google */
            color: white;
            font-size: 16px;
            font-weight: bold;
            padding: 12px 20px;
            text-decoration: none;
            border-radius: 5px;
            display: inline-block;
            transition: background-color 0.3s ease;
            margin: 10px 0;
        }

        /* Estilo para los botones cuando el mouse está encima */
        .google-calendar-btn:hover, .google-maps-btn:hover {
            background-color: #357AE8; /* Azul más oscuro */
        }

        /* Estilo para los botones de redes sociales */
        .social-btn {
            display: inline-block;
            padding: 10px 20px;
            color: white;
            font-size: 16px;
            border-radius: 50px;
            text-decoration: none;
            margin: 5px;
            transition: background-color 0.3s ease;
        }

        .instagram-btn {
            background-color: #E4405F;
        }

        .whatsapp-btn {
            background-color: #25D366;
        }

        /* Efecto hover para los botones de redes sociales */
        .instagram-btn:hover {
            background-color: #C13584;
        }

        .whatsapp-btn:hover {
            background-color: #128C7E;
        }

        /* Estilos adicionales para la página */
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            padding: 0;
            background-color: #f7f7f7;
        }

        h1 {
            color: #333;
        }

        ul {
            list-style-type: none;
            padding-left: 0;
        }

        li {
            margin: 5px 0;
        }

        a {
            color: inherit;
        }
    </style>
</head>
<body>
    <h1>Confirmación de Cita</h1>
    <p>Hola {{ $cita['cliente_nombre'] }},</p>

    <p>Tu cita ha sido registrada exitosamente.</p>

    <ul>
      <li><strong>Servicio:</strong> {{ $cita['id_servicio'] }}</li>
      <li><strong>Fecha:</strong> {{ $cita['fecha'] }}</li>
      <li><strong>Hora:</strong> {{ $cita['hora'] }}</li>
    </ul>

    <p>Gracias por utilizar nuestros servicios.</p>

    <!-- Botón estilizado para agregar la cita a Google Calendar -->
    <p>
        <a href="https://www.google.com/calendar/render?action=TEMPLATE&text=Confirmación%20de%20Cita&details=Tu%20cita%20ha%20sido%20registrada%20exitosamente.&location=Tu%20Ubicacion%20aqui&dates={{ \Carbon\Carbon::parse($cita['fecha'].' '.$cita['hora'])->format('Ymd\THis\Z') }}/{{ \Carbon\Carbon::parse($cita['fecha'].' '.$cita['hora'])->addHour()->format('Ymd\THis\Z') }}&ctz=America%2FSantiago" target="_blank" class="google-calendar-btn">
            Agendar en Google Calendar
        </a>
    </p>

    <!-- Botón para Google Maps con iframe -->
    <p>
        <a href="https://www.google.com/maps?q=10.467627,-84.970338&hl=es" target="_blank" class="google-maps-btn">
            Ver en Google Maps
        </a>
    </p>

    <!-- Botones de redes sociales (Instagram y WhatsApp) -->
    <p>
        <a href="https://www.instagram.com/" target="_blank" class="social-btn instagram-btn">Instagram</a>
        <a href="https://wa.me/50688494151" target="_blank" class="social-btn whatsapp-btn">WhatsApp</a>
    </p>

    <!-- Información de contacto para atención al cliente -->
    <p>Si deseas atención o necesitas realizar algún cambio en tu cita, puedes comunicarte a:</p>
    <ul>
        <li><strong>WhatsApp:</strong> <a href="https://wa.me/50688494151" target="_blank">+506 8849 4151</a></li>
        <li><strong>Correo electrónico:</strong> <a href="mailto:elberth@egguzmassage.com">elberth@egguzmassage.com</a></li>
    </ul>

</body>
</html>
