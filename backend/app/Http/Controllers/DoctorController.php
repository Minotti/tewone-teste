<?php

namespace App\Http\Controllers;

use App\Http\Requests\DoctorRequest;
use App\Repositories\Doctor;

class DoctorController extends Controller
{
    protected $rep;

    public function __construct(Doctor $repository)
    {
        $this->rep = $repository;
    }

    /**
     * Return all doctors
     * @return \Illuminate\Http\JsonResponse
     */
    public function all()
    {
        $data = $this->rep->with('specialities')->orderBy('id', 'desc')->paginate(9);

        return response()->json($data);
    }

    /**
     * Return a doctor
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function get($id)
    {
        $data = $this->rep->with('specialities')->findWhere(['id' => $id]);

        if($data->isEmpty()){
            return response()->json('Nenhum registro encontrado', 404);
        }

        return response()->json($data);
    }

    /**
     * Create the doctor and doctor_specialities
     * @param DoctorRequest $rqt
     * @return \Illuminate\Http\JsonResponse
     */
    public function create(DoctorRequest $rqt)
    {
        try {
            \DB::beginTransaction();

            $doctor = $this->rep->create($rqt->all());
            $doctor->specialities()->attach($rqt->specialities);

            \DB::commit();

            $doctor = $this->rep->with(['specialities'])->find($doctor->id);

            return response()->json($doctor);
        }catch (\Exception $e){
            \DB::rollback();
            dd($e);
        }
    }

    /**
     * Update a doctor
     * @param DoctorRequest $rqt
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(DoctorRequest $rqt, $id)
    {
        try {
            \DB::beginTransaction();

            $doctor = $this->rep->with('specialities')->find($id);
            $doctor->fill($rqt->all());
            $doctor->save();
            $doctor->specialities()->sync($rqt->specialities);

            \DB::commit();

            $doctor = $this->rep->with(['specialities'])->find($id);

            return response()->json($doctor);
        }catch (\Exception $e){
            \DB::rollback();
            dd($e);
        }
    }

    /**
     * Delete an Doctor
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete($id)
    {
        try {
            \DB::beginTransaction();

            $this->rep->delete($id);

            \DB::commit();

            return response()->json(true);
        }catch (\Exception $e){
            \DB::rollback();
        }
    }
}
