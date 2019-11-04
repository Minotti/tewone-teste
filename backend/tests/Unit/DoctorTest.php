<?php

namespace Tests\Unit;

use App\Models\Doctors;
use App\Repositories\Doctor;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class DoctorTest extends TestCase
{
    use DatabaseTransactions;

    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function testCreateDoctor()
    {
        $doctor = [
            'name' => 'Doctor Name',
            'crm' => 'CRM SP 1111',
            'phone' => '11 981111111',
            'specialities' => [
                2, 10
            ]
        ];

        $doc = Doctors::create($doctor);
        $doc->specialities()->attach($doctor['specialities']);

        $this->assertDatabaseHas('doctors', ['crm' => 'CRM SP 1111']);
        $this->assertDatabaseHas('doctor_specialities', ['doctor_id' => $doc->id, 'speciality_id' => 2]);
    }

    public function testUpdateDoctor()
    {
        $doctor = [
            'name' => 'Doctor Name',
            'crm' => 'CRM SP 1111',
            'phone' => '11 981111111',
            'specialities' => [
                2, 10
            ]
        ];

        $doc = Doctors::create($doctor);
        $doc->specialities()->attach($doctor['specialities']);
        $repo = new Doctor(app());

        $update = [
            'name' => 'Doctor Name Updated',
            'specialities' => [
                3, 11
            ]
        ];

        $doctor = $repo->find($doc->id);
        $doctor->fill($update);
        $doctor->save();
        $doctor->specialities()->sync($update['specialities']);

        $this->assertDatabaseHas('doctors', ['name' => 'Doctor Name Updated']);
        $this->assertDatabaseHas('doctor_specialities', ['doctor_id' => $doc->id, 'speciality_id' => 3]);
    }

    public function testDeleteDoctor()
    {
        $doctor = [
            'name' => 'Doctor Name',
            'crm' => 'CRM SP 1111',
            'phone' => '11 981111111',
        ];

        $doc = Doctors::create($doctor);
        $repo = new Doctor(app());
        $repo->delete($doc->id);

        $this->assertSoftDeleted('doctors', ['id' => $doc->id]);
    }
}
