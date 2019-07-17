<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;
use App\User;

class PostsController extends Controller
{
    public function get(){
        $posts = Post::where('subpage_id', '!=', null)->get();
        $i=0;
        foreach( $posts as $post){
            if($post->active){
                $user = User::select(array('id','name','email','admin'))->where('id','=', $post->user_id)->first();
                $post->user = $user;
            }
            else{
                unset($posts[$i]);
            }
            $i++;
        }
        
        return $posts;
    }

    public function add(Request $request){
        return $post = Post::create([
            'title' => $request->title,
            'description' => $request->description,
            'image' => $request->image,
            'user_id' => $request->user_id,
            'subpage_id' => $request->subpage_id,
            'timestamps' => true
        ]);
    }

    public function update(Request $request){
        $post = Post::find($request->id);
        $post->title = $request->title;
        $post->description = $request->description;
        $post->image = $request->image;
        $post->user_id = $request->user_id;
        $post->subpage_id = $request->subpage_id;
        $post->timestamps = true;
        $post->save();
        return $post;
    }

    public function delete(Request $request){
        $post = Post::find($request->id);
        $post->active = false;
        $post->save();
        return response(200);        
    }
}
