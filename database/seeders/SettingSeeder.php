<?php

namespace Database\Seeders;

use App\Models\Setting;
use Hamcrest\Core\Set;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Setting::firstOrCreate(['name' => 'app_name', 'value' => 'Laravel', 'type' => 'text', 'description' => 'Application Name', 'active' => 1]);
        Setting::firstOrCreate(['name' => 'app_description', 'value' => 'Laravel', 'type' => 'text', 'description' => 'Application Description', 'active' => 1]);
        Setting::firstOrCreate(['name' => 'username', 'value' => 'admin', 'type' => 'text', 'description' => 'Username', 'active' => 1]);
        Setting::firstOrCreate(['name' => 'password', 'value' => 'admin', 'type' => 'text', 'description' => 'Password', 'active' => 1]);
        Setting::firstOrCreate(['name' => 'email', 'value' => 'admin@gmail.com', 'type' => 'email', 'description' => 'Email', 'active' => 1]);
        Setting::firstOrCreate(['name' => 'needs', 'value' => '0', 'type' => 'number', 'description' => 'Needs', 'active' => 1]);
        Setting::firstOrCreate(['name' => 'wants', 'value' => '0', 'type' => 'number', 'description' => 'Wants', 'active' => 1]);
        Setting::firstOrCreate(['name' => 'savings', 'value' => '0', 'type' => 'number', 'description' => 'Savings', 'active' => 1]);
        Setting::firstOrCreate(['name' => 'currency', 'value' => 'RM', 'type' => 'text', 'description' => 'Currency', 'active' => 1]);
        Setting::firstOrCreate(['name' => 'allocate_from', 'value' => '1', 'type' => 'select', 'description' => 'All Income/Fixed Salary', 'active' => 1]);
        Setting::firstOrCreate(['name' => 'salary', 'value' => '0', 'type' => 'number', 'description' => 'Salary', 'active' => 1]);
    }
}
