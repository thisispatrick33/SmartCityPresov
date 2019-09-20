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
                
        /*
        *  get news
         */

        $news = Post::orderBy('created_at', 'DESC')->where('subpage_id','=', null)->where('active','=',true)->get();
        
        /*
        *  assign user to news
         */

        foreach( $news as $n){
            $user = User::select(array('id','name','email','admin'))->where('id','=',$n->user_id)->first();
            $n->user = $user;
        }

        return $news;
    }

    public function subpages(){
                
        /*
        *   get subpages
         */

        $subpages = DB::table('subpages')->select(array('title', 'title_link'))->get();

        return $subpages;
    }

    public function author($id){
                        
        /*
        *   get user and his posts
         */

        $user = User::with('posts')->select(['id','name','email'])->where('id','=',$id)->first();
        $posts = Post::orderBy('created_at', 'DESC')->where('user_id','=',$user->id)->where('active','=',true)->get();
                
        /*
        *   assign post to user
         */

        $user->posts = $posts;

        return response()->json([
            'data' => $user
        ]);
    }

    public function post($id){
                        
        /*
        *   get post with subpage and images
         */

        $post = Post::with(['subpage','images'])->where('id','=',$id)->first();

        return $post;
    }



    public function subpage($option){
                        
        /*
        *   get subpage and its posts
         */

        $subpage = Subpage::select('*')->where('title_link','=',$option)->first();
        $posts = Post::orderBy('created_at', 'DESC')->where('subpage_id','=',$subpage->id)->where('active','=',true)->get();
                        
        /*
        *   assign users to posts 
         */

        foreach ($posts as $post) {
            $user = User::select(['id','name','email'])->where('id','=',$post->user_id)->first();
            $post->user = $user;
        }
                        
        /*
        *   assign posts to subpage
         */

        $subpage->posts = $posts;


        return response()->json([
            'subpage' => $subpage
        ]);

    }
}
