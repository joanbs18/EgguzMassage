<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Hacemos que JWTAuth busque el token directamente en la cookie 'token'
        // JWTAuth::parser()->setRequestToken(function () {
        //     return request()->cookie('token');
        // });
        
    }
}
