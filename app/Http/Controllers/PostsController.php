<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;
use App\User;
use App\Image;

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

        $post = Post::create([
            'title' => $request->title,
            'description' => $request->description,
            'image' => "text",
            'user_id' => $request->user_id,
            'subpage_id' => $request->subpage_id,
            'timestamps' => true
        ]);
        
        $images_id= [];
        $images = [ 'images' => $request->images->all() ];

        $validator = Validator::make($images, [
            'data.*.name' => 'required|image|mimes:jpeg,png,jpg,gif,svg'
        ]);

        if ($validator->fails()) {
            return response(422);
        }
        else{
            foreach($request->images as $image){
                $imageName = time().'.'.$image->getClientOriginalExtension();
                request()->image->move(public_path('images'), $imageName);
                $img= new Image;
                $img->title = $image->getClientOriginalExtension();
                $img->alt = $image->getClientOriginalExtension();
                $img->path = public_path('images/'.$imageName);
                $img->save();
                array_push($images_id,$img->id);
            }
            $post->images()->attach($images_id);
        }

        return response(200);
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
        return response(200);
    }

    public function delete(Request $request){

        $post = Post::find($request->id);
        $post->active = false;
        $post->save();
        return response(200);        

    }
}
