<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    /**
     * Get authenticated user.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function current(Request $request)
    {
        return response()->json($request->user());
    }
    public function getUsers()
    {
        return User::all();
    }
    public function getUser(User $user)
    {
        return $user;
    }

    public function store_user_image(Request $request)
    {
         $validator = Validator::make($request->all(), [
            'user_id' => 'required',
            'file_number' => 'required',
            'file' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'msg' => "Validation Failed",
                'data' => $validator->errors(),
            ]);
        }
        $file = $request->file;
        $user_id = $request->user_id;
        $file_number = $request->file_number;
        $file_path = "doubles_images/$user_id/$file_number";

        $user = User::find($user_id);
        $images = json_decode($user->images,true);
        $images[$file_number] = $file_path."/". $file_number . "." . $file->getClientOriginalExtension();
        $user->images = json_encode($images);
        $user->save();

        //   $request->file($file_number)->store($file_path,'public');
        // Storage::disk('public')->put($file_path, $file."." . $file->getClientOriginalExtension())
        // $request->file->move(public_path('storage'), $file_path);

        if ($request->file->move(public_path($file_path), $file_number . "." . $file->getClientOriginalExtension())) {
            return response()->json([
                'status' => 'success',
                'msg' => "$file_number saved",
            ]);
        } else {
            return response()->json([
                'status' => 'error',
                'msg' => "$file_number could not be saved",
            ]);
        }
    }
}
