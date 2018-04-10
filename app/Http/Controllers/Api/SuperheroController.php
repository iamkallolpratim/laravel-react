<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\Superheroes;
use App\Models\Superhero;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SuperheroController extends Controller
{
    public function index()
    {
        $superheroes = new Superheroes(Superhero::all());
        return $superheroes;

    }
}
