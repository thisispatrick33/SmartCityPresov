<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
/*->middleware('auth.basic')*/
Route::get('/version', 'MainController@version');
Route::get('/post', 'PostsController@get');
Route::get('/', 'MainController@subpages');
Route::get('/author/{id}', 'MainController@author');
Route::get('/post/{id}', 'MainController@post');
Route::get('/{option}', 'MainController@subpage');

Route::group(['middleware' => ['jwt.auth','api-header']], function () {
    Route::put('/post/delete', 'PostsController@delete');
    Route::post('/post', 'PostsController@add');
    Route::post('/post/edit', 'PostsController@update');

    Route::group(['middleware' => 'admin'], function () {
        Route::post('auth/register', 'AuthController@register');
    });
});

Route::group(['middleware' => 'api-header'], function () {
    Route::post('auth/login', 'AuthController@login');
});
