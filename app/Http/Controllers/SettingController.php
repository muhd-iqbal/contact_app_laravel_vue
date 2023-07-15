<?php

namespace App\Http\Controllers;

use App\Models\Setting;
use Illuminate\Http\Request;

class SettingController extends Controller
{
    public function list() {
        return response()->json([
            'success' => true,
            'data' => Setting::all()
        ], 200);  
    }
}
