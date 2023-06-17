<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    public function login(Request $request) {
        $request->validate([
            'username' => 'required|exists:users,username',
            'password' => 'required'
        ],
        [
            'username.exists' => 'This username does not exist'
        ]);

        $attempt = Auth::attempt(array('username' => $request->input('username'), 'password' =>$request->input('password')));


        if(!$attempt){
            return response()->json([
                'message' => 'Wrong Password.',
                'errors' => [
                    'password' => [
                        'Your password is wrong, try again!'
                    ]
                ]
            ], 401);
        }

        $user = User::where('username', $request->input('username'))->first();
        
        return response()->json([
            'user' => $user,
        ]);
    }
}
