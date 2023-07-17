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

    public function update(Request $request) {
        $request->validate([
            'username' => 'required',
            'email' => 'required',
            'needs' => 'required',
            'wants' => 'required',
            'savings' => 'required',
            'currency' => 'required',
            'allocationFrom' => 'required',
            'monthlySalary' => 'required',
            'ccLimit' => 'required',
            'marketplace' => 'required'
        ]);

        Setting::where('name', 'username')->update(['value' => $request->username]);
        Setting::where('name', 'email')->update(['value' => $request->email]);
        Setting::where('name', 'needs')->update(['value' => $request->needs]);
        Setting::where('name', 'wants')->update(['value' => $request->wants]);
        Setting::where('name', 'savings')->update(['value' => $request->savings]);
        Setting::where('name', 'currency')->update(['value' => $request->currency]);
        Setting::where('name', 'allocate_from')->update(['value' => $request->allocationFrom]);
        Setting::where('name', 'salary')->update(['value' => $request->monthlySalary]);
        Setting::where('name', 'cc_limit')->update(['value' => $request->ccLimit]);
        Setting::where('name', 'marketplace')->update(['value' => $request->marketplace]);

        return response()->json([
            'success' => true,
            'message' => 'Settings updated successfully'
        ], 200);
    }
}
