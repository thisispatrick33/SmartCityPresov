<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Subpage extends Model
{
    public function posts(){
        return $this->hasMany(Post::class)->orderBy('created_at', 'DESC')->where('active',true);
    }

}
