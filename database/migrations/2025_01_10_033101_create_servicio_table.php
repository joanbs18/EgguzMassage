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
        Schema::create('servicio', function (Blueprint $table) {
            $table->increments('id_servicio'); // Llave primaria auto-incremental
            $table->string('nombre_servicio', 100); // Nombre del servicio
            $table->integer('duracion')->unsigned(); // Duración del servicio
            $table->text('descripcion')->nullable(); // Descripción del servicio (puede ser null)
            $table->timestamps(); // Campos created_at y updated_at
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('servicio');
    }
};
