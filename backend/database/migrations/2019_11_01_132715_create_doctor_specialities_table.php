<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDoctorSpecialitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('doctor_specialities', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('speciality_id');
            $table->foreign('speciality_id')->references('id')->on('specialities');

            $table->unsignedBigInteger('doctor_id');
            $table->foreign('doctor_id')->references('id')->on('doctors');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('doctor_specialities', function (Blueprint $table){
            $table->dropForeign('doctor_specialities_speciality_id_foreign');
            $table->dropForeign('doctor_specialities_doctor_id_foreign');
        });

        Schema::dropIfExists('doctor_specialities');
    }
}
