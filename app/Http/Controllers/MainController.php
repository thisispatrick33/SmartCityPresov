<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Subpage;
use App\Post;
use App\User;

class MainController extends Controller
{
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
    public function version(){
        $subpages = Subpage::select(['title_link','version'])->get();
        $versions = $subpages->pluck('version','title_link');
        return $versions;
    }
}
