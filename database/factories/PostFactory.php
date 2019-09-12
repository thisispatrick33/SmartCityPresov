<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Post;
use App\User;
use App\Subpage;
use Faker\Generator as Faker;

$factory->define(Post::class, function (Faker $faker) {
    return [
        'title' => $faker->jobTitle,
        'description' => $faker->text(250),
        'image' => $faker->imageUrl(1920, 1080, 'city'),
        'price' => $faker->randomFloat(2, 0, NULL)
    ];
});
