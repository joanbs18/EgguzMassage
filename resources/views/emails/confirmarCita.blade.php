<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <title>
        Confirmación de Cita
    </title>
    <!--[if !mso]><!-- -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--<![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style type="text/css">
        #outlook a {
            padding: 0;
        }

        body {
            margin: 0;
            padding: 0;
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
        }

        table,
        td {
            border-collapse: collapse;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }

        img {
            border: 0;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
            -ms-interpolation-mode: bicubic;
        }

        p {
            display: block;
            margin: 13px 0;
        }
    </style>
    <!--[if mso]>
        <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
    <!--[if lte mso 11]>
        <style type="text/css">
          .mj-outlook-group-fix { width:100% !important; }
        </style>
        <![endif]-->

    <!--[if !mso]><!-->
    <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css">
    <style type="text/css">
        @import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);
    </style>
    <!--<![endif]-->



    <style type="text/css">
        @media only screen and (min-width:480px) {
            .mj-column-per-100 {
                width: 100% !important;
                max-width: 100%;
            }
        }
    </style>


    <style type="text/css">
        @media only screen and (max-width:480px) {
            table.mj-full-width-mobile {
                width: 100% !important;
            }

            td.mj-full-width-mobile {
                width: auto !important;
            }
        }
    </style>


</head>

<body style="background-color:#f7f7f7;">


    <div style="background-color:#f7f7f7;">


        <!--[if mso | IE]>
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->


        <div style="margin:0px auto;max-width:600px;">

            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
                style="width:100%;">
                <tbody>
                    <tr>
                        <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                            <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                
        <tr>
      
            <td
               class="" style="vertical-align:top;width:600px;"
            >
          <![endif]-->

                            <div class="mj-column-per-100 mj-outlook-group-fix"
                                style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">

                                <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                    style="vertical-align:top;" width="100%">

                                    <tr>
                                        <td align="left"
                                            style="font-size:0px;padding:10px 25px;word-break:break-word;">

                                            <div
                                                style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:24px;font-weight:bold;line-height:1;text-align:left;color:#3c3c3d;">
                                                Confirmación de Cita con Egguz Massage</div>

                                        </td>
                                    </tr>

                                    <tr>
                                        <td align="left"
                                            style="font-size:0px;padding:10px 25px;word-break:break-word;">

                                            <div
                                                style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:left;color:#3c3c3d;">
                                                Hola {{ $cita['cliente_nombre'] }},</div>

                                        </td>
                                    </tr>

                                    <tr>
                                        <td align="left"
                                            style="font-size:0px;padding:10px 25px;word-break:break-word;">

                                            <div
                                                style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:left;color:#3c3c3d;">
                                                Tu cita ha sido registrada exitosamente. A continuación, los detalles:
                                            </div>

                                        </td>
                                    </tr>

                                    <tr>
                                        <td align="left"
                                            style="font-size:0px;padding:10px 25px;word-break:break-word;">

                                            <div
                                                style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:left;color:#000000;">
                                                <ul>
                                                    <li><strong>Servicio:</strong>
                                                        {{ $cita->servicio->nombre_servicio }}</li>
                                                    <li><strong>Fecha:</strong> {{ $cita->fecha }}</li>
                                                    <li><strong>Hora:</strong> {{ $cita->hora }}</li>

                                                </ul>
                                            </div>

                                        </td>
                                    </tr>

                                    <tr>
                                        <td align="left"
                                            style="font-size:0px;padding:10px 25px;word-break:break-word;">

                                            <div
                                                style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:left;color:#000000;">
                                                Por favor llega 5-10 minutos antes de tu cita para garantizar que
                                                aproveches al máximo tu tiempo.</div>

                                        </td>
                                    </tr>

                                    <tr>
                                        <td align="left"
                                            style="font-size:0px;padding:10px 25px;word-break:break-word;">

                                            <div
                                                style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:left;color:#000000;">
                                                Gracias por utilizar nuestros servicios. ¡Esperamos verte pronto!</div>

                                        </td>
                                    </tr>

                                    <tr>
                                        <td align="left" class="dancing"
                                            style="font-size:0px;padding:10px 25px;word-break:break-word;">

                                            <div
                                                style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:left;color:#000000;">
                                                — El equipo de Egguz Massage</div>

                                        </td>
                                    </tr>

                                    <tr>
                                        <td align="center" vertical-align="middle"
                                            style="font-size:0px;padding:10px 25px;word-break:break-word;">

                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                                style="border-collapse:separate;line-height:100%;">
                                                <tr>
                                                    <td align="center" bgcolor="#a3d4f8" role="presentation"
                                                        style="border:none;border-radius:3px;cursor:auto;mso-padding-alt:10px 25px;background:#a3d4f8;"
                                                        valign="middle">
                                                        <a href="https://www.google.com/calendar/render?action=TEMPLATE&text=Confirmación%20de%20Cita&details=Tu%20cita%20ha%20sido%20registrada%20exitosamente.&location=Egguz%20Massage%2C%20Avenida%20Principal%20123%2C%20Ciudad%20Ejemplo&dates={{ \Carbon\Carbon::parse($cita['fecha'] . ' ' . $cita['hora'], 'America/Costa_Rica')->setTimezone('UTC')->format('Ymd\THis\Z') }}/{{ \Carbon\Carbon::parse($cita['fecha'] . ' ' . $cita['hora'], 'America/Costa_Rica')->addHour()->setTimezone('UTC')->format('Ymd\THis\Z') }}&ctz=America%2FCosta_Rica"
                                                            style="display:inline-block;background:#a3d4f8;color:white;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;font-weight:normal;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:10px 25px;mso-padding-alt:0px;border-radius:3px;"
                                                            target="_blank">
                                                            Agendar en Google Calendar
                                                        </a>
                                                    </td>
                                                </tr>
                                            </table>

                                        </td>
                                    </tr>

                                    <tr>
                                        <td align="center" vertical-align="middle"
                                            style="font-size:0px;padding:10px 25px;word-break:break-word;">

                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                                style="border-collapse:separate;line-height:100%;">
                                                <tr>
                                                    <td align="center" bgcolor="#a3d4f8" role="presentation"
                                                        style="border:none;border-radius:3px;cursor:auto;mso-padding-alt:10px 25px;background:#a3d4f8;"
                                                        valign="middle">
                                                        <a href ="https://www.google.com/maps?q=10.467627,-84.970338&hl=es"
                                                            style="display:inline-block;background:#a3d4f8;color:white;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;font-weight:normal;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:10px 25px;mso-padding-alt:0px;border-radius:3px;"
                                                            target="_blank">
                                                            Ver en Google Maps
                                                        </a>
                                                    </td>
                                                </tr>
                                            </table>

                                        </td>
                                    </tr>

                                    <tr>
                                        <td style="font-size:0px;padding:10px 25px;word-break:break-word;">

                                            <p
                                                style="border-top:solid 4px #cccccc;font-size:1px;margin:0px auto;width:100%;">
                                            </p>

                                            <!--[if mso | IE]>
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 4px #cccccc;font-size:1px;margin:0px auto;width:550px;" role="presentation" width="550px"
        >
          <tr>
            <td style="height:0;line-height:0;">
              &nbsp;
            </td>
          </tr>
        </table>
      <![endif]-->


                                        </td>
                                    </tr>

                                    <tr>
                                        <td style="font-size:0px;padding:20px 0;word-break:break-word;">


                                            <!--[if mso | IE]>
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->


                                            <div
                                                style="background:#a3d4f8;background-color:#a3d4f8;margin:0px auto;max-width:600px;">

                                                <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                    role="presentation"
                                                    style="background:#a3d4f8;background-color:#a3d4f8;width:100%;">
                                                    <tbody>
                                                        <tr>
                                                            <td
                                                                style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                                                                <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                
        <tr>
      
            <td
               class="" style="vertical-align:top;width:600px;"
            >
          <![endif]-->

                                                                <div class="mj-column-per-100 mj-outlook-group-fix"
                                                                    style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">

                                                                    <table border="0" cellpadding="0"
                                                                        cellspacing="0" role="presentation"
                                                                        style="vertical-align:top;" width="100%">

                                                                        <tr>
                                                                            <td align="center"
                                                                                style="font-size:0px;padding:10px 25px;word-break:break-word;">

                                                                                <table border="0" cellpadding="0"
                                                                                    cellspacing="0"
                                                                                    role="presentation"
                                                                                    style="border-collapse:collapse;border-spacing:0px;">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td style="width:150px;">

                                                                                                <img alt="Elberth Logo"
                                                                                                    height="auto"
                                                                                                    src="https://egguzmassage.com/images/Elbeth%20logo%20email.png"
                                                                                                    style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;"
                                                                                                    width="150" />

                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>

                                                                            </td>
                                                                        </tr>

                                                                        <tr>
                                                                            <td align="center"
                                                                                style="font-size:0px;padding:10px;word-break:break-word;">

                                                                                <div
                                                                                    style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;line-height:1;text-align:center;color:#ffffff;">
                                                                                    Síguenos en redes sociales</div>

                                                                            </td>
                                                                        </tr>

                                                                        <tr>
                                                                            <td align="center"
                                                                                style="font-size:0px;padding:10px;word-break:break-word;">


                                                                                <!--[if mso | IE]>
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
      >
        <tr>
      
              <td>
            <![endif]-->
                                                                                <table align="center" border="0"
                                                                                    cellpadding="0" cellspacing="0"
                                                                                    role="presentation"
                                                                                    style="float:none;display:inline-table;">

                                                                                    <tr>
                                                                                        <td style="padding:4px;">
                                                                                            <table border="0"
                                                                                                cellpadding="0"
                                                                                                cellspacing="0"
                                                                                                role="presentation"
                                                                                                style="background:#25D366;border-radius:3px;width:30px;">
                                                                                                <tr>
                                                                                                    <td
                                                                                                        style="font-size:0;height:30px;vertical-align:middle;width:30px;">
                                                                                                        <a href="https://wa.me/50688494151"
                                                                                                            target="_blank">
                                                                                                            <img height="30"
                                                                                                                style="border-radius:3px;display:block;"
                                                                                                                width="30" />
                                                                                                        </a>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>

                                                                                        <td
                                                                                            style="vertical-align:middle;">
                                                                                            <a href="https://wa.me/50688494151"
                                                                                                style="color:#333333;font-size:15px;font-family:Ubuntu, Helvetica, Arial, sans-serif;line-height:22px;text-decoration:none;"
                                                                                                target="_blank">
                                                                                                WhatsApp
                                                                                            </a>
                                                                                        </td>

                                                                                    </tr>

                                                                                </table>
                                                                                <!--[if mso | IE]>
              </td>
            
              <td>
            <![endif]-->
                                                                                <table align="center" border="0"
                                                                                    cellpadding="0" cellspacing="0"
                                                                                    role="presentation"
                                                                                    style="float:none;display:inline-table;">

                                                                                    <tr>
                                                                                        <td style="padding:4px;">
                                                                                            <table border="0"
                                                                                                cellpadding="0"
                                                                                                cellspacing="0"
                                                                                                role="presentation"
                                                                                                style="background:#E4405F;border-radius:3px;width:30px;">
                                                                                                <tr>
                                                                                                    <td
                                                                                                        style="font-size:0;height:30px;vertical-align:middle;width:30px;">
                                                                                                        <a href="https://instagram.com/"
                                                                                                            target="_blank">
                                                                                                            <img height="30"
                                                                                                                src="https://www.mailjet.com/images/theme/v1/icons/ico-social/instagram.png"
                                                                                                                style="border-radius:3px;display:block;"
                                                                                                                width="30" />
                                                                                                        </a>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>

                                                                                        <td
                                                                                            style="vertical-align:middle;">
                                                                                            <a href="https://instagram.com/"
                                                                                                style="color:#333333;font-size:15px;font-family:Ubuntu, Helvetica, Arial, sans-serif;line-height:22px;text-decoration:none;"
                                                                                                target="_blank">
                                                                                                Instagram
                                                                                            </a>
                                                                                        </td>

                                                                                    </tr>

                                                                                </table>
                                                                                <!--[if mso | IE]>
              </td>
            
          </tr>
        </table>
      <![endif]-->


                                                                            </td>
                                                                        </tr>

                                                                    </table>

                                                                </div>

                                                                <!--[if mso | IE]>
            </td>
          
        </tr>
      
                  </table>
                <![endif]-->
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                            </div>


                                            <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      <![endif]-->


                                        </td>
                                    </tr>

                                    <tr>
                                        <td align="left"
                                            style="font-size:0px;padding:10px 25px;word-break:break-word;">

                                            <div
                                                style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:left;color:#000000;">
                                                Si deseas reprogramar o cancelar tu cita, puedes hacerlo hasta 24 horas
                                                antes respondiendo a este correo o llamándonos al:</div>

                                        </td>
                                    </tr>

                                    <tr>
                                        <td align="left"
                                            style="font-size:0px;padding:10px 25px;word-break:break-word;">

                                            <div
                                                style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:left;color:#000000;">
                                                <ul>
                                                    <li>
                                                        <strong>WhatsApp:</strong>
                                                        <a href="https://wa.me/50688494151" target="_blank">+506 8849
                                                            4151</a>
                                                    </li>
                                                    <li>
                                                        <strong>Correo electrónico:</strong>
                                                        <a
                                                            href="mailto:elberth@egguzmassage.com">elberth@egguzmassage.com</a>
                                                    </li>
                                                </ul>
                                            </div>

                                        </td>
                                    </tr>

                                </table>

                            </div>

                            <!--[if mso | IE]>
            </td>
          
        </tr>
      
                  </table>
                <![endif]-->
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>


        <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      <![endif]-->


    </div>

</body>

</html>
