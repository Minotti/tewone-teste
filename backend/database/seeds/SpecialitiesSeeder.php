<?php

use Illuminate\Database\Seeder;

class SpecialitiesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $specialities = [
            ['name' => 'ALERGOLOGIA'],
            ['name' => 'ANGIOLOGIA'],
            ['name' => 'BUCO MAXILO'],
            ['name' => 'CARDIOLOGIA CLÍNICA'],
            ['name' => 'CARDIOLOGIA INFANTIL'],
            ['name' => 'CIRURGIA CABEÇA E PESCOÇO'],
            ['name' => 'CIRURGIA CARDÍACA'],
            ['name' => 'CIRURGIA DE CABEÇA/PESCOÇO'],
            ['name' => 'CIRURGIA DE TÓRAX'],
            ['name' => 'CIRURGIA GERAL'],
            ['name' => 'CIRURGIA PEDIÁTRICA'],
            ['name' => 'CIRURGIA PLÁSTICA'],
            ['name' => 'CIRURGIA TORÁCICA'],
            ['name' => 'CIRURGIA VASCULAR'],
            ['name' => 'CLÍNICA MÉDICA'],
        ];

        if(!\App\Models\Specialities::find(1)) {
            \DB::table('specialities')->insert($specialities);
        }
    }
}
