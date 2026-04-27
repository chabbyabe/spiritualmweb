<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(['web'])->group(function () {
    // Route::get('/', function () {
    //     return Inertia::render('Home/Home', [
    //         'canLogin' => Route::has('login'),
    //         'canRegister' => Route::has('register'),
    //         'laravelVersion' => Application::VERSION,
    //         'phpVersion' => PHP_VERSION,
    //     ]);
    // })->name('home');
    Route::get('/', function () {
        return redirect()->away('https://spiritualmaturity.nl/', 301);
    })->name('home');
    Route::get('/about', function () {
        return Inertia::render('Home/About');
    })->name('home.about');

    Route::get('/devotionals/{language}', function ($language = 'en') {
        return Inertia::render('Home/Devotional', [
            'language' => $language,
        ]);
    })->name('home.devotional');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');
Route::get('/devotions', function () {
    return Inertia::render('Devotions');
})->middleware(['auth', 'verified'])->name('devotions');



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

 Route::group(['prefix' => 'laravel-filemanager', 'middleware' => ['web', 'auth']], function () {
     \UniSharp\LaravelFilemanager\Lfm::routes();
 });
 
require __DIR__.'/auth.php';
