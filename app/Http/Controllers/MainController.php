<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class MainController extends Controller
{
    public function subpages(){
        $subpages = DB::table('subpages')->select(array('title', 'title_link'))->get();

        return $subpages;
                
    }

    public function data($option){
        $data = DB::table('subpages')->select('*')->where('title_link','=',$option)->first();
        
        return response()->json([
            'data' => $data
        ]);
                
    }
}
