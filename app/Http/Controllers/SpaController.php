<?php

namespace App\Http\Controllers;
use App\Models\User;

class SpaController extends Controller
{
    /**
     * Get the SPA view.
     *
     * @return \Illuminate\Http\Response
     */
    public function __invoke()
    {
        return view('spa');
    }
  
}
