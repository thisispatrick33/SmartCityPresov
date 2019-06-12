<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;

class PostsController extends Controller
{
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
        Post::find($request->id)->delete();
        return response(200);        
    }
}
