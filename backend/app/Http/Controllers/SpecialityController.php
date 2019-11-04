<?php

namespace App\Http\Controllers;

use App\Repositories\Specialities;

class SpecialityController extends Controller
{
    protected $rep;

    public function __construct(Specialities $repository)
    {
        $this->rep = $repository;
    }

    /**
     * Return all specialities
     * @return \Illuminate\Http\JsonResponse
     */
    public function get()
    {
        $data = $this->rep->get(['id', 'name as text']);

        return response()->json($data);
    }
}
