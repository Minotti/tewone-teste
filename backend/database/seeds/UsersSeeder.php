<?php

use Illuminate\Database\Seeder;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = [
            [
                'name' => 'Douglas Santos Torres de Oliveira',
                'email' => 'douglas@tew.one',
                'password' => bcrypt('douglas@tew.one')
            ],
            [
                'name' => 'Marlon F Minotti',
                'email' => 'marlon.minotti@gmail.com',
                'password' => bcrypt('123123')
            ]
        ];

        \DB::table('users')->insert($users);
    }
}
