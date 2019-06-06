<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SubpageModel extends Model
{
    public function Post(){
        return $this->HasMany('App/PostModel');
    }
}
