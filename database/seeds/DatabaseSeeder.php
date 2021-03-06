<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        factory(App\User::class, 5)->create();
        factory(App\Image::class,15)->create();
        factory(App\Subpage::class,4)->create();
        factory(App\Post::class,17)->create();

        $users=App\User::select('id')->get()->all();
        $subpages=App\Subpage::select('id')->get()->all();
        App\Post::all()->each(function ($post) use ($users, $subpages) { 
            if (rand(0,100) > 25) {
                $post->user_id=$users[rand(1,count($users)-1)]->id;
                $post->subpage_id=$subpages[rand(1,count($subpages)-1)]->id;
                $post->save();
            }
            else{
                $post->user_id=$users[rand(1,count($users)-1)]->id;
                $post->save();
            }
            
        });

        $images = App\Image::all();

        //pivot table
        App\Post::all()->each(function ($post) use ($images) { 
            $post->images()->attach(
                $images->random(rand(1, count($images)-1))->pluck('id')->toArray()

            ); 
        });
       
    }
}




