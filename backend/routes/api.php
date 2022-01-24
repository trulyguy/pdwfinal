<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\DespesasController;
use App\Http\Controllers\CategoriasController;
use App\Http\Controllers\UtilizadorController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/token/revoke', function (Request $request) {
    DB::table('oauth_access_tokens')
        ->where('user_id', $request->user()->id)
        ->update([
            'revoked' => true
        ]);
    return response()->json('DONE');
});
Route::post('register', [App\Http\Controllers\API\AuthController::class, 'register'])->name('register');
Route::get('/products',[ProductController::class, 'index']);
Route::post('/products',[ProductController::class, 'store']);
Route::put('/products/{id}',[ProductController::class, 'update']);
Route::delete('/products/{id}', [ProductController::class, 'destroy']);
Route::get('/products/{$id}',[ProductController::class, 'show']);

    
Route::get('/despesas',[DespesasController::class, 'index']);
Route::post('/despesas',[DespesasController::class, 'store']);
Route::put('/despesas/{id}',[DespesasController::class, 'update']);
Route::delete('/despesas/{id}',[DespesasController::class, 'destroy']);
Route::get('/despesas/{$id}',[DespesasController::class, 'show']);

Route::get('/categorias',[CategoriasController::class,'index']);
Route::post('/categorias',[CategoriasController::class,'store']);
Route::put('/categorias/{id}',[CategoriasController::class,'update']);
Route::delete('/categorias/{id}',[CategoriasController::class,'destroy']);
Route::get('/categorias/{$id]',[CategoriasController::class,'show']);

Route::get('/utilizador',[UtilizadorController::class,'index']);
Route::post('/utilizador',[UtilizadorController::class,'store']);
Route::put('/utilizador/{id}',[UtilizadorController::class,'update']);
Route::delete('/utilizador/{id}',[UtilizadorController::class,'destroy']);
Route::get('/utilizador/{$id}',[UtilizadorController::class,'show']);
 

Route::middleware('auth:api')->get('/token/revoke', function (Request $request) {
    DB::table('oauth_access_tokens')
        ->where('user_id', $request->user()->id)
        ->update([
            'revoked' => true
        ]);
    return response()->json('DONE');
});
Route::get('/user',[UserController::class,'index']);
Route::post('/user',[UserController::class,'store']);
Route::put('/user/{id}',[UserController::class,'update']);
Route::delete('/user/{id}', [UserController::class,'destroy']);
Route::get('/user/{$id}',[UserController::class, 'show']);
Route::post('register', [App\Http\Controllers\API\AuthController::class, 'register'])->name('register');
Route::post('login', [App\Http\Controllers\API\AuthController::class, 'login'])->name('login');
