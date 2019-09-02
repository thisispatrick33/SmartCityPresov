<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Subpage;
use Faker\Generator as Faker;

$factory->define(Subpage::class, function (Faker $faker) {
    return [
        'title' => $faker->jobTitle,
        'description' => $faker->text(250),
        'CoverImage' => $faker->imageUrl(1920, 1080, 'city'),
        'title_link' => $faker->slug
    ];
});
