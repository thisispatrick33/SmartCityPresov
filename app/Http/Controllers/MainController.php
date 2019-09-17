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
            array_push($data, $x);
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
        $post = Post::with(['subpage','images'])->where('id','=',$id)->first();

        return $post;
    }


    public function subpage($option){
        $subpage = Subpage::select('*')->where('title_link','=',$option)->first();
        $posts = Post::where('subpage_id','=',$subpage->id)->where('active','=',true)->get();
        
        $subpage->posts = $posts;

        return response()->json([
            'subpage' => $subpage
        ]);

    }
}
