<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\User;
use DB;

class AuthController extends Controller
{
    public function login(Request $request){
        //$user = DB::table('users')->where('email', '=', $request->email)->first();
        
        if(Auth::attempt(['email' => $request->email,'password' => $request->password])){
            return response()->json([
                'check' => Auth::check(),
                'user' => Auth::user(),
                'id' => Auth::id()
            ]);
        }
        else{
            return "neidzem";
        }
        
    }
}
