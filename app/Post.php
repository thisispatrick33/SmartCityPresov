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

    public function author(){
        return $this->belongsTo(User::class);
    }
    public function subpage(){
        return $this->belongsTo(Subpage::class);
    }
}
