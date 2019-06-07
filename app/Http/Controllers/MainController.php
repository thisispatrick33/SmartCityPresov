<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\Subpage;
use App\Post;
use App\User;

class MainController extends Controller
{
    public function subpages(){
        $subpages = DB::table('subpages')->select(array('title', 'title_link'))->get();

        return $subpages;
                
    }

    public function author($id){
        $data = User::with('posts')->select('*')->where('id','=',$id)->first();
                
        return response()->json([
            'data' => $data
        ]);
    }

    public function post($id){
        $data = Post::with('subpage')->select('*')->where('id','=',$id)->first();
                
        return response()->json([
            'data' => $data
        ]);
    }

    public function data($option){
        $data = Subpage::with('posts')->select('*')->where('title_link','=',$option)->first();
        
        return response()->json([
            'data' => $data
        ]);
                
    }
}
