<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Confirmación de Cita</title>
    <style>
        /* Estilos para el botón */
        .google-calendar-btn,
        .google-maps-btn {
            background-color: #4285F4;
            /* Azul de Google */
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
        .google-calendar-btn:hover,
        .google-maps-btn:hover {
            background-color: #357AE8;
            /* Azul más oscuro */
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

        /* From Uiverse.io by WAIOKYERE */
        ul {
            list-style: none;
        }

        .example-2 {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .example-2 .icon-content {
            margin: 0 10px;
            position: relative;
        }

        .example-2 .icon-content .tooltip {
            position: absolute;
            top: -30px;
            left: 50%;
            transform: translateX(-50%);
            color: #fff;
            padding: 6px 10px;
            border-radius: 15px;
            opacity: 0;
            visibility: hidden;
            font-size: 14px;
            transition: all 0.3s ease;
        }

        .example-2 .icon-content:hover .tooltip {
            opacity: 1;
            visibility: visible;
            top: -50px;
        }

        .example-2 .icon-content a {
            position: relative;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50px;
            height: 50px;
            border-radius: 20%;
            color: #4d4d4d;
            background-color: #ffff;
            transition: all 0.3s ease-in-out;
        }

        .example-2 .icon-content a:hover {
            box-shadow: 3px 2px 45px 0px rgb(0 0 0 / 50%);
        }

        .example-2 .icon-content a svg {
            position: relative;
            z-index: 1;
            width: 30px;
            height: 30px;
        }

        .example-2 .icon-content a:hover {
            color: white;
        }

        .example-2 .icon-content a .filled {
            position: absolute;
            top: auto;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 0;
            background-color: #000;
            transition: all 0.3s ease-in-out;
        }

        .example-2 .icon-content a:hover .filled {
            height: 100%;
        }

        .example-2 .icon-content a[data-social="WhatsApp"] .filled,
        .example-2 .icon-content a[data-social="WhatsApp"]~.tooltip {
            background-color: #1db954;
            color: #fff;
    
        }

        .example-2 .icon-content a[data-social="Instagram"] .filled,
        .example-2 .icon-content a[data-social="Instagram"]~.tooltip {
            background-color: #bd081c;
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
       <a href="https://www.google.com/calendar/render?action=TEMPLATE
    &text=Confirmación%20de%20Cita
    &details=Tu%20cita%20ha%20sido%20registrada%20exitosamente.
    &location=Tu%20Ubicacion%20aqui
    &dates={{ \Carbon\Carbon::parse($cita['fecha'] . ' ' . $cita['hora'], 'America/Costa_Rica')->setTimezone('UTC')->format('Ymd\THis\Z') }}/{{ \Carbon\Carbon::parse($cita['fecha'] . ' ' . $cita['hora'], 'America/Costa_Rica')->addHour()->setTimezone('UTC')->format('Ymd\THis\Z') }}
    &ctz=America%2FCosta_Rica"
target="_blank" class="google-calendar-btn">
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
        <!-- From Uiverse.io by WAIOKYERE -->
    <ul class="example-2">
        <li class="icon-content">
            <a href="https://wa.me/50688494151" aria-label="WhatsApp" data-social="WhatsApp">
                <div class="filled"></div>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#9b9b9b" fill="none">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.3789 2.27907 14.6926 2.78382 15.8877C3.06278 16.5481 3.20226 16.8784 3.21953 17.128C3.2368 17.3776 3.16334 17.6521 3.01642 18.2012L2 22L5.79877 20.9836C6.34788 20.8367 6.62244 20.7632 6.87202 20.7805C7.12161 20.7977 7.45185 20.9372 8.11235 21.2162C9.30745 21.7209 10.6211 22 12 22Z" stroke="#9b9b9b" stroke-width="1.5" stroke-linejoin="round"></path>
    <path d="M8.58815 12.3773L9.45909 11.2956C9.82616 10.8397 10.2799 10.4153 10.3155 9.80826C10.3244 9.65494 10.2166 8.96657 10.0008 7.58986C9.91601 7.04881 9.41086 7 8.97332 7C8.40314 7 8.11805 7 7.83495 7.12931C7.47714 7.29275 7.10979 7.75231 7.02917 8.13733C6.96539 8.44196 7.01279 8.65187 7.10759 9.07169C7.51023 10.8548 8.45481 12.6158 9.91948 14.0805C11.3842 15.5452 13.1452 16.4898 14.9283 16.8924C15.3481 16.9872 15.558 17.0346 15.8627 16.9708C16.2477 16.8902 16.7072 16.5229 16.8707 16.165C17 15.8819 17 15.5969 17 15.0267C17 14.5891 16.9512 14.084 16.4101 13.9992C15.0334 13.7834 14.3451 13.6756 14.1917 13.6845C13.5847 13.7201 13.1603 14.1738 12.7044 14.5409L11.6227 15.4118" stroke="#9b9b9b" stroke-width="1.5"></path>
</svg>
            </a>
            <div class="tooltip">WhatsApp</div>
        </li>
        <li class="icon-content">
            <a href="https://www.Instagram.com/" aria-label="Instagram" data-social="Instagram">
                <div class="filled"></div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#9b9b9b" fill="none">
    <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="#9b9b9b" stroke-width="1.5" stroke-linejoin="round"></path>
    <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="#9b9b9b" stroke-width="1.5"></path>
    <path d="M17.5078 6.5L17.4988 6.5" stroke="#9b9b9b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
            </a>
            <div class="tooltip">Instagram</div>
        </li>


    </ul>

    </p>

    <!-- Información de contacto para atención al cliente -->
    <p>Si deseas atención o necesitas realizar algún cambio en tu cita, puedes comunicarte a:</p>
    <ul>
        <li><strong>WhatsApp:</strong> <a href="https://wa.me/50688494151" target="_blank">+506 8849 4151</a></li>
        <li><strong>Correo electrónico:</strong> <a href="mailto:elberth@egguzmassage.com">elberth@egguzmassage.com</a>
        </li>
    </ul>

</body>

</html>
