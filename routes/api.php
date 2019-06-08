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

Route::get('/{option}', 'MainController@data');
Route::get('/', 'MainController@subpages');
Route::get('/author/{id}', 'MainController@author');
Route::get('/post/{id}', 'MainController@post');


Route::post('/post/{title}/{description}/{image}/{user_id}/{subpage_id}', 'PostsController@add');
Route::put('/post/edit/{id}/{title}/{description}/{image}/{user_id}/{subpage_id}', 'PostsController@update');
Route::delete('/post/delete/{id}', 'PostsController@delete');
