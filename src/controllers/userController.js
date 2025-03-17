import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { User } from "../models/userModel.js";
import {uploadOnCloudinary} from '../utils/cloudinary.js'

const registerUser = asyncHandler(async (req, res) => {
  // input from req.body
  const { username, password, fullName, email } = req.body;
  // check if all the feilds are entered (all types of validation)
  if (
    [fullName, email, username, password].some((field) => field?.trim() === "")
  ) {
    res.status(400);
    throw new ApiError("Please fill all fields", 400);
  } else if (!email.includes("@")) {
    res.status(400);
    throw new ApiError("Invalid email", 400);
  }
  // Check if user already exists
  const existedUser = await User.findOne({
    $or: [{ email }, { username }],
  });
  if (existedUser) {
    res.status(409);
    throw new ApiError("User already exists", 409);
  }
  // check if avatar is given
  const avatarLocalPath = req.files?.avatar[0]?.path;
  let coverImageLocalPath = null;
  if (
    req.files?.coverImage &&
    Array.isArray(req.files.coverImage) &&
    req.files.coverImage.length > 0
  ) {
    coverImageLocalPath = req.files.coverImage[0].path;
  }
  if (!avatarLocalPath) {
    res.status(400);
    throw new ApiError("Please upload avatar", 400);
  }
  // upload the avatar and coverImage on cloudinary
  const avatar = await uploadOnCloudinary(avatarLocalPath);
  let coverImage = null;
  if (coverImageLocalPath) {
    coverImage = await uploadOnCloudinary(coverImageLocalPath);
  }
  if (!avatar) {
    res.status(500);
    throw new ApiError("Avatar upload failed", 500);
  }
  // save the data in database
  const user = await User.create({
    fullName,
    avatar: avatar.url,
    coverImage: coverImage?.url || null, // if cover image does not exists
    email,
    username: username.toLowerCase(),
    password,
  });
  // remove password and refresh token field from response
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );
  // check for user creation
  if (!createdUser) {
    res.status(500);
    throw new ApiError(500, "User creation failed");
  }
  // give response
  res
    .status(201)
    .json(new ApiResponse("User created successfully", createdUser));
});

export { registerUser };
