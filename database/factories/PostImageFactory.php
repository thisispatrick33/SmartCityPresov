<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Image;
use App\Post;
use App\PostImage;
use Faker\Generator as Faker;

$factory->define(PostImage::class, function (Faker $faker) {
    return [
        'image_id' => factory(Image::class)->create()->id,
        'post_id' => factory(Post::class)->create()->id
    ];
});
