<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class StartController extends Controller
{
    public function data(){
        $meno = DB::table('users')->first();
        return response()->json([
            'name' => $meno
        ]);
                
    }
}
