<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;

class PostsController extends Controller
{
    public function add($title, $description, $image, $user_id, $subpage_id){
        return $post = Post::create([
            'title' => $title,
            'description' => $description,
            'image' => $image,
            'user_id' => (int)$user_id,
            'subpage_id' => (int)$subpage_id,
            'timestamps' => true
        ]);   
    }

    public function update($id, $title, $description, $image, $user_id, $subpage_id){
        $post = Post::find($id);
        $post->title = $title;
        $post->description = $description;
        $post->image = $image;
        $post->user_id = $user_id;
        $post->subpage_id = $subpage_id;
        $post->timestamps = true;
        $post->save();
        return $post;
    }

    public function delete($id){
        Post::find($id)->delete();
        return response(200);        
    }
}
