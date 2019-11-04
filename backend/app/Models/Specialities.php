<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Specialities extends Model
{
    protected $table = 'specialities';
    protected $fillable = ['doctor_id', 'speciality_id'];
    protected $hidden = ['created_at', 'updated_at', 'pivot'];

}
