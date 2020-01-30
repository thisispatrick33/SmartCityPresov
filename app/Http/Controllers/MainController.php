<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Subpage;
use App\Post;
use App\User;

class MainController extends Controller
{
    public function news(){
        $news = Post::with("user")->orderBy('created_at', 'DESC')->where('subpage_id','=', null)->where('active','=',true)->get();
        return $news;
    }

    public function subpages(){
        $subpages = Subpage::select(["title","title_link"])->get();
        return $subpages;
    }

    public function author($id){
        $user = User::with('posts')->select(['id','name','email'])->where('id',$id)->first();
        if($user == null){
            return 204;
        }
        return response()->json([
            'data' => $user
        ]);
    }

    public function post($id){
        $post = Post::with(['subpage','images'])->where('id','=',$id)->first();
        if($post == null){
            return 204;
        }
        return $post;
    }

    public function subpage($option){  
        $subpage = Subpage::with("posts.user")->where("title_link",$option)->first();
        if($subpage == null){
            return 204;
        }
        return response()->json([
            'subpage' => $subpage
        ]);
    }
}
