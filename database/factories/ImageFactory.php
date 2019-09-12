<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Image;
use Faker\Generator as Faker;

$factory->define(Image::class, function (Faker $faker) {
    return [
        'title' => $faker->name,
        'alt' => $faker->name,
        'path' => $faker->imageUrl(800, 600, 'cats')
    ];
});
