<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;

class Doctor extends BaseRepository
{
    protected $fieldSearchable = [
        'name' => 'like',
        'crm' => 'like'
    ];

    public function boot(){
        $this->pushCriteria(app('Prettus\Repository\Criteria\RequestCriteria'));
    }

    /**
     * Specify Model class name
     *
     * @return string
     */
    function model()
    {
        return 'App\\Models\\Doctors';
    }
}
