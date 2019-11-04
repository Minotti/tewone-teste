<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use JansenFelipe\Utils\Mask;
use JansenFelipe\Utils\Utils;

class Doctors extends Model
{
    use SoftDeletes;

    protected $table = 'doctors';
    protected $fillable = ['name', 'crm', 'phone'];
    protected $hidden = ['created_at', 'updated_at', 'deleted_at'];

    public function specialities()
    {
        return $this->belongsToMany(Specialities::class, DoctorSpecialities::class, 'doctor_id', 'speciality_id');
    }

    public function setPhoneAttribute($value)
    {
        $this->attributes['phone'] = Utils::unmask($value);
    }

    public function getPhoneAttribute($value)
    {
        return Utils::mask($value, '## # ####-####');
    }
}
