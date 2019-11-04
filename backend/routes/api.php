<?php

Route::group([], function () {
    Route::post('login', 'AuthController@login');
    Route::post('register', 'AuthController@register');

    Route::group(['middleware' => 'auth:api'], function() {
        Route::get('logout', 'AuthController@logout');
        Route::get('specialities', 'SpecialityController@get');

        Route::get('doctors', 'DoctorController@all');
        Route::get('doctors/find/{id}', 'DoctorController@get');
        Route::post('doctors/create', 'DoctorController@create');
        Route::put('doctors/update/{id}', 'DoctorController@update');
        Route::delete('doctors/delete/{id}', 'DoctorController@delete');

        Route::get('user', 'AuthController@user');
    });
});
