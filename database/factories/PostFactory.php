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
        'image' => $faker->image('/tmp'),
        'user_id' => factory(User::class)->create()->id,
        'subpage_id' => factory(Subpage::class)->create()->id
    ];
});
