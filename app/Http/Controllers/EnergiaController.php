<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class EnergiaController extends Controller
{
    public function data(){
        $subpage = DB::table('subpages')->select('*')->where('title','=','Energia')->get()[0];
    

        return response()->json([
            'subpage' => $subpage
        ]);
                
    }
}
