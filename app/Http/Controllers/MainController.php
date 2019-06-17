<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\Subpage;
use App\Post;
use App\User;

class MainController extends Controller
{   
    public function news(){
        $news = DB::table('posts')->where('subpage_id','=', null)->get();
        $data =  [];
        foreach( $news as $x){
            $user = User::select(array('id','name','email','admin'))->where('id','=',$x->user_id)->first();
            $x->user = $user;
            array_push($data, array($x));
        }
        return $data;
    }

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
        $data = Post::with('subpage')->where('id','=',$id)->first();
                
        return $data;
    }

    
    public function data($option){
        $subpage = Subpage::with('posts')->select('*')->where('title_link','=',$option)->first();
        $data = array();
        foreach ($subpage->posts as $x) {
             $author = User::select(array('id','name','email','admin'))->where('id','=',$x->user_id)->first();
             $x->user = $author;
             array_push($data,array($x));
        }
        return response()->json([
            'subpage' => $subpage
        ]);
                
    }
}
