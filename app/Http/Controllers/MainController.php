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
}
