<?php

namespace App\Http\Controllers;

use Auth;
use JWTAuth;
use App\User;
use Illuminate\Http\Request;
use App\Http\Requests\RegisterFormRequest;

class AuthController extends Controller
{
    public function register(RegisterFormRequest $request)
    {
        $user = User::make($request->only(['name', 'email']));
        $user->password = bcrypt($request->password);
        $user->save();

        response([
            'status' => 'success',
            'data' => $user
        ]);
    }

    public function login(Request $request)
    {
        $credentials = $request->only(['email', 'password']);

        if ( ! $token = JWTAuth::attempt($credentials)) {
            return response([
                'status' => 'error',
                'message' => 'Invalid Credentials.'
            ], 400);
        }

        return response([
            'status' => 'success'
        ])->header('Authorization', $token);
    }

    public function logout()
    {
        JWTAuth::invalidate();

        return response([
            'status' => 'success'
        ]);
    }

    public function user(Request $request)
    {
        $user = User::find(Auth::id());

        return response([
            'status' => 'success',
            'data' => $user
        ]);
    }

    public function refresh()
    {
        return response([
            'status' => 'success'
        ]);
    }
}
