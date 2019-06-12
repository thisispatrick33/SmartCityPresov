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
Route::get('/news', 'MainController@news');
Route::get('/{option}', 'MainController@data');
Route::get('/', 'MainController@subpages');
Route::get('/author/{id}', 'MainController@author');
Route::get('/post/{id}', 'MainController@post');


Route::post('/post', 'PostsController@add');
Route::put('/post/edit', 'PostsController@update');
Route::delete('/post/delete', 'PostsController@delete');


Route::group(['middleware' => ['jwt.auth','api-header']], function () {
  
    // all routes to protected resources are registered here  
    
    
});

Route::group(['middleware' => 'api-header'], function () {
  
    // The registration and login requests doesn't come with tokens 
    // as users at that point have not been authenticated yet
    // Therefore the jwtMiddleware will be exclusive of them
    Route::post('auth/login', 'AuthController@login');
    Route::post('auth/register', 'AuthController@register');
});