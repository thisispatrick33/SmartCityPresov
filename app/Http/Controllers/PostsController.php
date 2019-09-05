<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;
use App\User;
use App\Image;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests;

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

        $post = new Post;
        $post->title = $request->title;
        $post->description = $request->description;
        $post->image = "dd";
        $post->price = $request->price;
        $post->user_id = $request->user_id;
        $post->subpage_id = $request->subpage_id;
        
        return $request->images;
        $images_id= [];
        $images = ['data' => $request->images];

        $validator = Validator::make($images, [
            'data.*.name' => 'required|image|mimes:jpeg,png,jpg,gif,svg'
        ]);

        if ($validator->fails()) {

            return response(422);
        }
        else{
            foreach($request->images as $image){
                $imageName = time().'.'.$image->getClientOriginalExtension();
                $image->move(public_path('images'), $imageName);
                $img= new Image;
                $img->title = $image->getClientOriginalExtension();
                $img->alt = $image->getClientOriginalExtension();
                $img->path = public_path('images/'.$imageName);
                $img->save();
                array_push($images_id,$img->id);
            }            
        }

        if ($post->save()) {
            if(sizeof($request->images)>0){
                if($post->images()->attach($images_id)){
                    return response(200);
                }
            }
            else {
                return response(200);
            }
        }
        else {
            return response(422);
        }

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
