<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recordatorio de Cita</title>
</head>
<body>
    <h1>Hola, {{ $cliente_nombre }}</h1>
    <p>Este es un recordatorio de tu cita programada para hoy:</p>
    <p><strong>Fecha:</strong> {{ $fecha }}</p>
    <p><strong>Hora:</strong> {{ $hora }}</p>
    <p><strong>Servicio:</strong> {{ $servicio }}</p>
    <p>Te esperamos en nuestra oficina. Si necesitas reprogramar o cancelar, por favor contáctanos.</p>
</body>
</html>
