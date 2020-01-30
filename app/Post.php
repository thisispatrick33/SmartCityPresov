<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = [
        'id',
        'title',
        'description',
        'image',
        'user_id',
        'subpage_id',
        'created_at',
        'updated_at'
    ];

    public function user(){
        return $this->belongsTo(User::class)->select(['id','name','email']);
    }
    public function subpage(){
        return $this->belongsTo(Subpage::class);
    }

    public function images(){
        return $this->belongsToMany('App\Image', 'image_post');
    }

}
