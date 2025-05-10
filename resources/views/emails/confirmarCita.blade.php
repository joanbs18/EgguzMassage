<!DOCTYPE html>
<html lang="es" style="box-sizing: border-box;font-size: 62.5%;">

<head style="box-sizing: inherit;">
    <meta charset="UTF-8" style="box-sizing: inherit;">
    <title style="box-sizing: inherit;">Confirmación de Cita</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" style="box-sizing: inherit;">

    
    
</head>

<body style="box-sizing: inherit;font-family: var(--fuente-primaria);color: var(--color-primario);font-size: 1.6rem;line-height: 2;background-color: #f7f7f7;">
    <main class="main" style="box-sizing: inherit;width: min(90%, 120rem);margin: 0 auto;">
        <h1 style="box-sizing: inherit;font-family: var(--fuente-primaria);line-height: 1.2;font-size: 4.8rem;">Confirmación de Cita con Egguz Massage</h1>
        <p style="box-sizing: inherit;">Hola {{ $cita['cliente_nombre'] }},</p>

        <p style="box-sizing: inherit;">
            Tu cita ha sido registrada exitosamente. A continuación, los detalles:
        </p>

        <ul style="box-sizing: inherit;list-style: none;">
            <li style="box-sizing: inherit;"><strong style="box-sizing: inherit;">Servicio:</strong> {{ $cita['id_servicio'] }}</li>
            <li style="box-sizing: inherit;"><strong style="box-sizing: inherit;">Fecha:</strong> {{ $cita['fecha'] }}</li>
            <li style="box-sizing: inherit;"><strong style="box-sizing: inherit;">Hora:</strong> {{ $cita['hora'] }}</li>
        </ul>

        <p style="box-sizing: inherit;">
            Por favor llega 5-10 minutos antes de tu cita para garantizar que
            aproveches al máximo tu tiempo.
        </p>

        <p style="box-sizing: inherit;">Gracias por utilizar nuestros servicios. ¡Esperamos verte pronto!</p>

        <p class="dancing" style="box-sizing: inherit;font-family: var(--fuente-secundaria);font-size: 3.5rem;">— El equipo de Egguz Massage</p>

        <p style="box-sizing: inherit;">
            <a href="https://www.google.com/calendar/render?action=TEMPLATE&text=Confirmación%20de%20Cita&details=Tu%20cita%20ha%20sido%20registrada%20exitosamente.&location=Egguz%20Massage%2C%20Avenida%20Principal%20123%2C%20Ciudad%20Ejemplo&dates={{ \Carbon\Carbon::parse($cita['fecha'] . ' ' . $cita['hora'], 'America/Costa_Rica')-&gt;setTimezone('UTC')-&gt;format('Ymd\THis\Z') }}/{{ \Carbon\Carbon::parse($cita['fecha'] . ' ' . $cita['hora'], 'America/Costa_Rica')-&gt;addHour()-&gt;setTimezone('UTC')-&gt;format('Ymd\THis\Z') }}&ctz=America%2FCosta_Rica" target="_blank" class="google-calendar-btn" style="box-sizing: inherit;text-decoration: none;background-color: var(--color-secundario);color: white;font-size: 16px;font-weight: bold;padding: 12px 20px;border-radius: 5px;display: inline-block;transition: background-color 0.3s ease;margin: 10px 0;">
                Agendar en Google Calendar
            </a>
        </p>


        <p style="box-sizing: inherit;">
            <a href="https://www.google.com/maps?q=10.467627,-84.970338&hl=es" target="_blank" class="google-maps-btn" style="box-sizing: inherit;text-decoration: none;background-color: var(--color-secundario);color: white;font-size: 16px;font-weight: bold;padding: 12px 20px;border-radius: 5px;display: inline-block;transition: background-color 0.3s ease;margin: 10px 0;">
                Ver en Google Maps
            </a>
        </p>



        <div class="container-social" style="box-sizing: inherit;display: flex;justify-content: center;align-items: center;flex-direction: column;height: auto;background-image: url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='2000' height='560' preserveAspectRatio='none' viewBox='0 0 2000 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1002%26quot%3b)' fill='none'%3e%3crect width='2000' height='560' x='0' y='0' fill='rgba(163%2c 212%2c 248%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c834.352C153.372%2c840.23%2c261.531%2c689.744%2c382.846%2c595.721C493.318%2c510.102%2c625.157%2c438.993%2c677.39%2c309.354C728.852%2c181.629%2c664.23%2c42.607%2c661.171%2c-95.062C657.581%2c-256.622%2c759.769%2c-444.622%2c657.85%2c-570.03C556.565%2c-694.659%2c355.143%2c-646.026%2c195.984%2c-667.461C61.868%2c-685.523%2c-72.6%2c-727.411%2c-201.353%2c-685.745C-328.483%2c-644.604%2c-406.826%2c-527.598%2c-507.546%2c-439.791C-627.009%2c-335.645%2c-818.179%2c-277.575%2c-848.079%2c-121.935C-877.815%2c32.854%2c-739.526%2c167.365%2c-648.971%2c296.375C-572.206%2c405.739%2c-467.31%2c481.808%2c-364.442%2c567.082C-246.066%2c665.212%2c-153.648%2c828.464%2c0%2c834.352' fill='%2390cbf7'%3e%3c/path%3e%3cpath d='M2000 1225.81C2121.921 1204.9009999999998 2185.271 1073.1280000000002 2275.137 988.1220000000001 2346.979 920.165 2423.275 861.2570000000001 2474.695 776.7860000000001 2531.571 683.352 2599.362 584.281 2587.132 475.58299999999997 2574.819 366.148 2477.596 291.643 2410.303 204.47000000000003 2338.582 111.56 2288.112-7.071000000000026 2179.745-52.15599999999995 2067.921-98.67899999999997 1939.633-75.43299999999999 1823.982-39.462999999999965 1709.588-3.8840000000000146 1601.064 56.03399999999999 1527.608 150.67000000000002 1456.114 242.77800000000002 1425.635 360.47900000000004 1423.067 477.05 1420.683 585.289 1475.366 680.8340000000001 1513.699 782.086 1555.0529999999999 891.318 1570.425 1015.453 1656.704 1094.1779999999999 1749.108 1178.492 1876.711 1246.953 2000 1225.81' fill='%23b6ddfa'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1002'%3e%3crect width='2000' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e&quot;);padding: 4rem 2rem;color: var(--color-Blanco);">
            <img src="img/Elberth Logo-blanco.webp" alt="Elberth Logo" style="box-sizing: inherit;max-width: 100%;max-height: 35rem;">
            <div class="social-media" style="box-sizing: inherit;display: flex;">
                <h3 style="box-sizing: inherit;font-family: var(--fuente-primaria);line-height: 1.2;font-size: 3.2rem;">Redes Sociales</h3>
                <ul class="example-2" style="box-sizing: inherit;list-style: none;display: flex;justify-content: center;align-items: center;">
                    <li class="icon-content" style="box-sizing: inherit;margin: 0 10px;position: relative;">
                        <a href="https://wa.me/50688494151" aria-label="WhatsApp" data-social="WhatsApp" style="box-sizing: inherit;text-decoration: none;position: relative;overflow: hidden;display: flex;justify-content: center;align-items: center;width: 50px;height: 50px;border-radius: 20%;color: #4d4d4d;background-color: #ffff;transition: all 0.3s ease-in-out;">
                            <div class="filled" style="box-sizing: inherit;position: absolute;top: auto;bottom: 0;left: 0;width: 100%;height: 0;background-color: #1db954;transition: all 0.3s ease-in-out;color: #fff;"></div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="16" height="16" color="#a3d4f8" fill="none" style="box-sizing: inherit;position: relative;z-index: 1;width: 30px;height: 30px;">
                                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.3789 2.27907 14.6926 2.78382 15.8877C3.06278 16.5481 3.20226 16.8784 3.21953 17.128C3.2368 17.3776 3.16334 17.6521 3.01642 18.2012L2 22L5.79877 20.9836C6.34788 20.8367 6.62244 20.7632 6.87202 20.7805C7.12161 20.7977 7.45185 20.9372 8.11235 21.2162C9.30745 21.7209 10.6211 22 12 22Z" stroke="#a3d4f8" stroke-width="1.5" stroke-linejoin="round" style="box-sizing: inherit;transition: stroke 0.3s ease;"></path>
                                <path d="M8.58815 12.3773L9.45909 11.2956C9.82616 10.8397 10.2799 10.4153 10.3155 9.80826C10.3244 9.65494 10.2166 8.96657 10.0008 7.58986C9.91601 7.04881 9.41086 7 8.97332 7C8.40314 7 8.11805 7 7.83495 7.12931C7.47714 7.29275 7.10979 7.75231 7.02917 8.13733C6.96539 8.44196 7.01279 8.65187 7.10759 9.07169C7.51023 10.8548 8.45481 12.6158 9.91948 14.0805C11.3842 15.5452 13.1452 16.4898 14.9283 16.8924C15.3481 16.9872 15.558 17.0346 15.8627 16.9708C16.2477 16.8902 16.7072 16.5229 16.8707 16.165C17 15.8819 17 15.5969 17 15.0267C17 14.5891 16.9512 14.084 16.4101 13.9992C15.0334 13.7834 14.3451 13.6756 14.1917 13.6845C13.5847 13.7201 13.1603 14.1738 12.7044 14.5409L11.6227 15.4118" stroke="#a3d4f8" stroke-width="1.5" style="box-sizing: inherit;transition: stroke 0.3s ease;"></path>
                            </svg>
                        </a>
                        <div class="tooltip" style="box-sizing: inherit;position: absolute;top: -30px;left: 50%;transform: translateX(-50%);color: #fff;padding: 6px 10px;border-radius: 15px;opacity: 0;visibility: hidden;font-size: 14px;transition: all 0.3s ease;">WhatsApp</div>
                    </li>
                    <li class="icon-content" style="box-sizing: inherit;margin: 0 10px;position: relative;">
                        <a href="https://www.Instagram.com/" aria-label="Instagram" data-social="Instagram" style="box-sizing: inherit;text-decoration: none;position: relative;overflow: hidden;display: flex;justify-content: center;align-items: center;width: 50px;height: 50px;border-radius: 20%;color: #4d4d4d;background-color: #ffff;transition: all 0.3s ease-in-out;">
                            <div class="filled" style="box-sizing: inherit;position: absolute;top: auto;bottom: 0;left: 0;width: 100%;height: 0;background-color: #bd081c;transition: all 0.3s ease-in-out;"></div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="16" height="16" color="#a3d4f8" fill="none" style="box-sizing: inherit;position: relative;z-index: 1;width: 30px;height: 30px;">
                                <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="#a3d4f8" stroke-width="1.5" stroke-linejoin="round" style="box-sizing: inherit;transition: stroke 0.3s ease;"></path>
                                <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="#a3d4f8" stroke-width="1.5" style="box-sizing: inherit;transition: stroke 0.3s ease;"></path>
                                <path d="M17.5078 6.5L17.4988 6.5" stroke="#a3d4f8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="box-sizing: inherit;transition: stroke 0.3s ease;"></path>
                            </svg>
                        </a>
                        <div class="tooltip" style="box-sizing: inherit;position: absolute;top: -30px;left: 50%;transform: translateX(-50%);color: #fff;padding: 6px 10px;border-radius: 15px;opacity: 0;visibility: hidden;font-size: 14px;transition: all 0.3s ease;">Instagram</div>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Información de contacto para atención al cliente -->
        <p style="box-sizing: inherit;">
            Si deseas reprogramar o cancelar tu cita, puedes hacerlo hasta 24 horas
            antes respondiendo a este correo o llamándonos al:
        </p>
        <ul style="box-sizing: inherit;list-style: none;">
            <li style="box-sizing: inherit;">
                <strong style="box-sizing: inherit;">WhatsApp:</strong>
                <a href="https://wa.me/50688494151" target="_blank" style="box-sizing: inherit;text-decoration: none;">+506 8849 4151</a>
            </li>
            <li style="box-sizing: inherit;">
                <strong style="box-sizing: inherit;">Correo electrónico:</strong>
                <a href="mailto:elberth@egguzmassage.com" style="box-sizing: inherit;text-decoration: none;">elberth@egguzmassage.com</a>
            </li>
        </ul>
    </main>
</body>

</html>
