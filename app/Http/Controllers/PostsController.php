<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;
use App\User;
use App\Image;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;
use Storage;
use App\Services\PayUService\Exception;




class PostsController extends Controller
{
    public function get(){
        $posts = Post::where('subpage_id', '!=', null)->get();
        $i=0;
        foreach($posts as $post){
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
        try{
            /*
             * Auxiliary variables
             */

            $post_images_ids = [];
            $first = true;

            /*
             *  Creating new database entry for Post
             */

            $post = new Post;
            $post->title = $request->title;
            $post->description = $request->description;
            $post->price = $request->price;
            $post->user_id = $request->user_id;
            $post->subpage_id = $request->subpage_id;

            /*
             *  Images validator
             *  if post contains images, append data to post
            */

            $validator = Validator::make(['data' => $request->images], [
                'data.*.name' => 'required|image|mimes:jpeg,png,jpg,gif,svg'
            ]);

            /*
             *  Images storage process
             *  foreach pass over every image, change name and save it
            */
            foreach($request->images as $image_file){

                /*
                 *  Crafting new image name
                 */

                $image_name = time().Str::random(5).".".$image_file->getClientOriginalExtension();

                /*
                *  Move image to public folder
                */

                $image_file->move(public_path('img/'),$image_name);

                /*
                 *  Creating new database entry for Image and save
                 */

                $image = new Image;
                $image->title = $image_name;
                $image->alt = $image_file->getClientOriginalName();
                $image->path = public_path('img/'.$image_name);
                $image->save();

                array_push($post_images_ids,$image->id);

                /*
                 *  Select cover image | first image = cover image
                 */

                if ($first) {
                    $post->image = public_path('img/'.$image_name);
                    $first = false;
                }
            }
            if ($post->save()) {
                if(sizeof($request->images)>0){
                    if($post->images()->attach($post_images_ids)){
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
        }catch (\Exception $e){
            return $e->getMessage() ;
        }

    }

    public function update(Request $request){
        return $request;
        $post = Post::with('images')->find($request->id);

        $images=[];

        foreach($post->images as $image){
            $images[]=$image->title;
        }


        Storage::delete($images);

        if ($post->images()->detach()) {
            $post->title = $request->title;
            $post->description = $request->description;
            $post->user_id = $request->user_id;
            $post->subpage_id = $request->subpage_id;

            $images_id= [];
            $images = ['data' => $request->images];

            $validator = Validator::make($images, [
                'data.*.name' => 'required|image|mimes:jpeg,png,jpg,gif,svg'
            ]);

            if ($validator->fails()) {

                return response(422);
            }
            else{
                $prvy=true;
                foreach($request->images as $image ){
                    $name= time().Str::random(5);
                    $alt = $image->getClientOriginalName();
                    $image->move(public_path('img/'),$name);
                    $img= new Image;
                    $img->title = $name;
                    $img->alt = $alt;
                    $img->path = public_path('img/'.$name);
                    $img->save();
                    array_push($images_id,$img->id);
                    if ($prvy) {
                        $post->image = public_path('img/'.$name);
                        $prvy = false;
                    }
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
        }
        else {
            # code...
            return response(422);
        }
       /* $post->title = $request->title;
        $post->description = $request->description;
        $post->image = $request->image;
        $post->user_id = $request->user_id;
        $post->subpage_id = $request->subpage_id;
        $post->timestamps = true;
        $post->save();*/

    }

    public function delete(Request $request){
        $post = Post::find($request->id);
        $post->active = false;
        $post->save();
        return response(200);
    }
}
