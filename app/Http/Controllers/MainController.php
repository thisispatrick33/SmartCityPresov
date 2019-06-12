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

        /*return response()->json([
            'data' => $news
        ]);*/
        $data =  [];
        foreach( $news as $x){
            $user = DB::table('users')->select('name')->where('id','=', $x->user_id)->first();
            array_push($data, array($x, $user->name));
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
                
        return response()->json([
            'data' => $data
        ]);
    }

    public function data($option){
        $subpage = Subpage::with('posts')->select('*')->where('title_link','=',$option)->first();
        $data = array();
        foreach ($subpage->posts as $x) {
             $author = DB::table('users')->select('name')->where('id', '=', $x->user_id)->first();
             array_push($data,array($x, $author->name));
        }
        return response()->json([
            'subpage' => $subpage,
            'posts' => $data
        ]);
                
    }
}
