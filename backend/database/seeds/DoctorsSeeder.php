<?php

use Illuminate\Database\Seeder;

class DoctorsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();

        if(!\App\Models\Doctors::find(1)) {
            for ($i = 1; $i < 30; $i++) {
                $doctor = [
                    'name' => $faker->name,
                    'crm' => "CRM MT $faker->buildingNumber",
                    'phone' => '65 999999999',
                ];

                $specialities = [rand(1, 14), rand(1, 14)];

                $doc = \App\Models\Doctors::create($doctor);
                $doc->specialities()->attach($specialities);
            }
        }
    }
}
