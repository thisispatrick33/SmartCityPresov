<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserModel extends Model
{
    public function Post(){
        return $this->HasMany('App/PostModel');
    }
}
