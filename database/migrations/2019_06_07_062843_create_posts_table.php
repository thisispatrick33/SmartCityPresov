<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->text('description');
            $table->string('image');
            $table->double('price',20,2)->nullable()->default(0.00);
            //$table->unsignedBigInteger('user_id');
            //$table->unsignedBigInteger('subpage_id');
            /*$table->foreign(['user_id', 'subpage_id'])->references(['id', 'id'])->on( ['users', 'subpages'])
                ->onDelete(['cascade', 'cascade'])
                ->onUpdate(['cascade', 'cascade']);*/
            $table->integer('user_id')->unsigned()->nullable()->default(null);
            $table->foreign('user_id')->references('id')->on('users');
            $table->integer('subpage_id')->unsigned()->nullable()->default(null);
            $table->foreign('subpage_id')->references('id')->on('subpages');
            $table->boolean('active')->default(true);
            $table->timestamps();



        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('posts');
    }
}
