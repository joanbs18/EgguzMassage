<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
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
        Schema::create('cita', function (Blueprint $table) {
            $table->string('id_cita', 10)->primary(); // Llave primaria
            $table->unsignedInteger('id_servicio'); // Llave foránea a servicio
            $table->string('cliente_cedula', 20); // Cedula del cliente
            $table->string('cliente_nombre', 100); // Nombre del cliente
            $table->string('cliente_telefono', 15); // Teléfono del cliente
            $table->string('cliente_email', 100); // Correo del cliente
            $table->date('fecha'); // Fecha de la cita
            $table->time('hora'); // Hora de la cita
            $table->boolean('estado'); // Estado de la cita
            $table->timestamps(); // Campos created_at y updated_at

            // Definir llaves foráneas
            $table->foreign('id_servicio')->references('id_servicio')->on('servicio')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cita');
    }
};
