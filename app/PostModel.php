<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PostModel extends Model
{
    public function Author(){
        return $this->belongsTo('App/UserModel');
    };

    public function Subpage(){
        return $this->belongsTo('App/SubpageModel');
    }
}
