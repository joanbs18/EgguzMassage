<?php

namespace App\Console;

use App\Console\Commands\RecordatorioCitas;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        // Ejecutar el comando todos los días a las 8:00 AM
        $schedule->command('recordatorio:citas')->dailyAt('14:00');
    }

    /**
     * Define the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        // Cargar los comandos en la carpeta 'Commands'
        $this->load(__DIR__.'/Commands');
    }
}
