<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class EnergiaController extends Controller
{
    public function data(){
        $user = DB::table('users')->first();
    

        return response()->json([
            'name' => $meno
        ]);
                
    }
}
