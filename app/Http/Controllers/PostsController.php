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
                
        /*
        *   get all posts
         */

        $posts = Post::where('subpage_id', '!=', null)->get();
        $i=0;
                
        /*
        * check if post is active and attach user to it
         */

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
        //return $request;
        //return $request->file('images[]');
        try{
        
            /*
             * Auxiliary variables
             */

            $post_images_ids = [];
        

            /*
             *  Get and update post
             */
            $post = Post::with("images")->find($request->id);
            $post->title = $request->title;
            $post->description = $request->description;
            $post->price = $request->price;
            $post->user_id = $request->user_id;
            $post->subpage_id = $request->subpage_id;
    
    

            /*
             * delete images
            */
            foreach ($post->images as $image) {
                if(in_array($image->id,$request->updated_images)){
                    array_push($post_images_ids,$image->id);
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



            /*
             *  Images validator
             *  if post contains images, append data to post
            */

            $validator = Validator::make(['data' => $request->images], [
                'data.*.name' => 'required|image|mimes:jpeg,png,jpg,gif,svg'
            ]);
            /*
            *   check if request has images
            */

                //TO DO



            /*
             *  Images storage process
             *  foreach pass over every image, change name and save it
            */
            if(sizeOf($request->images) > 0){
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

                }
            }
            if ($post->save()) {
                if(sizeof($request->images)>0){
                    if($post->images()->attach($post_images_ids)){
                        $cover = $post->images()[0];
                        $post->image = $cover->path;
                        if($post->save){
                            return response(200);
                        }
                    }
                }
                else {
                    $cover = $post->images()[0];
                    $post->image = $cover->path;
                    if($post->save){
                        return response(200);
                    }
                }
            }
            else {
                return response(422);
            }
        }catch (\Exception $e){
            return $e->getMessage() ;
        }
    }

    public function delete(Request $request){
                
        /*
        *   get post
         */

        $post = Post::find($request->id);
                
        /*
        *  set active to false and save post
         */

        $post->active = false;
        $post->save();
        return response(200);
    }
}
