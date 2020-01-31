<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;
use DB;
use App\Post;
use App\User;
use App\Image;


class PostsController extends Controller
{
    public function get(){
        $posts = Post::with("user")->orderBy('created_at', 'DESC')->where('subpage_id','!=', null)->where('active',true)->get()->take(6);
        return $posts;
    }

    public function add(Request $request){
        $validator = Validator::make($request->all(), [
            'title' => 'required|string',
            'description' => 'required|string',
            'price' => 'required|numeric',
            'user_id' => 'required|numeric',
            'subpage_id' => 'sometimes|numeric',
            'images' => 'required'
        ]);

        if ($validator->fails()) {
            return $validator->messages()->all();
        };

        $success = false;
        DB::beginTransaction();

        try{
            $post_images_ids = [];
            $first = true;

            $post = new Post;
            $post->title = $request->title;
            $post->description = $request->description;
            $post->price = $request->price;
            $post->user_id = $request->user_id;
            $post->subpage_id = $request->subpage_id;

            if($request->hasFile('images')){
                foreach($request->images as $image_file){
                    $image_name = time().Str::random(5).".".$image_file->getClientOriginalExtension();
                    $image_file->move(public_path('img/'),$image_name);

                    $image = new Image;
                    $image->title = $image_name;
                    $image->alt = $image_file->getClientOriginalName();
                    $image->path = public_path('img/'.$image_name);
                    $image->save();

                    array_push($post_images_ids,$image->id);

                    if ($first) {
                        $post->image = public_path('img/'.$image_name);
                        $first = false;
                    }
                }
            }
            if ($post->save()) {
                if($request->hasFile('images')){
                    $post->images()->attach($post_images_ids);
                }
                $success = true;
            }
        }catch (\Exception $e){
            return $e->getMessage() ;
        }
        if($success){
            DB::commit();
            return 200;
        }
        else{
            DB::rollback();
            return 409;
        }
    }

    public function update(Request $request){
        $validator = Validator::make($request->all(), [
            'id' => 'required|exists:posts,id',
            'title' => 'required|string',
            'description' => 'required|string',
            'price' => 'required|numeric',
            'subpage_id' => 'sometimes|numeric',
            'images' => 'required',
            'updated_images' => 'sometimes'
        ]);

        if ($validator->fails()) {
            return $validator->messages()->all();
        };

        $success = false;
        DB::beginTransaction();

        try{
            $post_images_ids = [];

            $post = Post::with("images")->find($request->id);
            $post->title = $request->title;
            $post->description = $request->description;
            $post->price = $request->price;
            $post->subpage_id = $request->subpage_id;
            if(!is_array($request->updated_images)){
                $request->updated_images = array($request->updated_images);
            }
            foreach ($post->images as $image) {
                if(in_array(strval($image->id),$request->updated_images)){
                    array_push($post_images_ids,(int)$image->id);
                }
                else{
                    if(unlink($image->path)){
                        $image->delete();
                    }
                    else{
                        return response('Obrázok sa nedal vymazať');
                    }
                }
            }
            
            if($request->hasFile('images')){
                foreach($request->images as $image_file){
                    $image_name = time().Str::random(5).".".$image_file->getClientOriginalExtension();
                    $image_file->move(public_path('img/'),$image_name);

                    $image = new Image;
                    $image->title = $image_name;
                    $image->alt = $image_file->getClientOriginalName();
                    $image->path = public_path('img/'.$image_name);
                    $image->save();

                    array_push($post_images_ids,$image->id);
                }
            }
            if ($post->save()) {
                $post->images()->detach();
                $post->images()->attach($post_images_ids);
                $post_cover = Post::with('images')->find($post->id);
                $post_cover->image = $post_cover->images[0]->path;
                if($post_cover->save()){
                    $success = true;
                }
            }
        }catch (\Exception $e){
            return $e->getMessage() ;
        }
        if($success){
            DB::commit();
            return 200;
        }
        else{
            DB::rollback();
            return 409;
        }
    }

    public function delete(Request $request){
        if($post = Post::find($request->id)){
            $post->active = false;
            $post->save();
            return 200;
        }
        return 400;
    }
}
