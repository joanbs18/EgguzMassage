<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Crear la tabla 'disponibilidad'
        Schema::create('disponibilidad', function (Blueprint $table) {
            $table->id(); 
            $table->string('dia', 20); 
            $table->time('horario_inicio'); 
            $table->time('horario_fin'); 
            $table->boolean('disponible'); 
            $table->timestamps(); 
        });

        // Insertar datos por defecto
        DB::table('disponibilidad')->insert([
            [
                'dia' => 'Lunes',
                'horario_inicio' => '18:30:00',
                'horario_fin' => '21:30:00',
                'disponible' => 1,
            ],
            [
                'dia' => 'Martes',
                'horario_inicio' => '18:30:00',
                'horario_fin' => '21:30:00',
                'disponible' => 1,
            ],
            [
                'dia' => 'Miércoles',
                'horario_inicio' => '18:30:00',
                'horario_fin' => '21:30:00',
                'disponible' => 1,
            ],
            [
                'dia' => 'Jueves',
                'horario_inicio' => '18:30:00',
                'horario_fin' => '21:30:00',
                'disponible' => 1,
            ],
            [
                'dia' => 'Viernes',
                'horario_inicio' => '18:30:00',
                'horario_fin' => '21:30:00',
                'disponible' => 1,
            ],
            [
                'dia' => 'Domingo',
                'horario_inicio' => '09:30:00',
                'horario_fin' => '15:30:00',
                'disponible' => 1,
            ],
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // Eliminar los registros insertados en la migración
        DB::table('disponibilidad')->whereIn('dia', [
            'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Domingo'
        ])->delete();

        // Eliminar la tabla 'disponibilidad'
        Schema::dropIfExists('disponibilidad');
    }
};
