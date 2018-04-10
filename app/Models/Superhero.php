<?php


namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Superhero extends Model
{
    protected $table = 'superheroes';

    protected $primaryKey = 'id';

    protected $guarded = ['id'];
}
