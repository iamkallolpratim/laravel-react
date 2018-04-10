<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();
        foreach (range(1, 50) as $index) {
            DB::table('superheroes')->insert([
                'name'     => $faker->name,
                'address'    => $faker->address ,
                'creator' => $faker->name($gender = 'female')
            ]);
        }
    }
}
