<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\DespesasController;
use App\Http\Controllers\CategoriasController;

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

Route::get('/products',[ProductController::class, 'index']);
Route::post('/products',[ProductController::class, 'store']);
Route::put('/products/{id}',[ProductController::class, 'update']);
Route::delete('/products/{id}', [ProductController::class, 'destroy']);
Route::get('/products/{$id',[ProductController::class, 'show']);

    
Route::get('/despesas',[DespesasController::class, 'index']);
Route::post('/despesas',[DespesasController::class, 'store']);
Route::put('/despesas/{id}',[DespesasController::class, 'update']);
Route::delete('/despesas/{id}',[DespesasController::class, 'destroy']);
Route::get('/despesas/{$id',[DespesasController::class, 'show']);

Route::get('/categorias',[CategoriasController::class,'index']);
Route::post('/categorias',[CategoriasController::class,'store']);
Route::put('/categorias/{id}',[CategoriasController::class,'update']);
Route::delete('/categorias/{id}',[CategoriasController::class,'destroy']);
Route::get('/categorias/{$id',[CategoriasController::class,'show']);