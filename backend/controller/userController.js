import asyncHandler from '../middleware/asyncHandler.js';
import User from "../models/userModel.js"
import generateToken from "../utils/generateToken.js"

// @desc    Fetch all users
// @route   GET /api/users
// @access  Private/Admin
const getUsers = asyncHandler (async(req,res) => {
    // const users = await Product.find({})
    return res.json("Get Users")
})

// @desc    Get user by id
// @route   GET /api/users/:id
// @access  Private/Admin
const getUserById = asyncHandler (async(req,res) => {
    // const users = await Product.find({})
    return res.json("Get User by id")
})

// @desc    Delete users
// @route   DELETE /api/users/:id
// @access  Private/Admin
const deleteUser = asyncHandler (async(req,res) => {
    const users = await Product.find({})
    return res.json("Delete User")
})

// @desc    Delete users
// @route   PUT /api/users/:id
// @access  Private/Admin
const updateUser = asyncHandler (async(req,res) => {
    const users = await Product.find({})
    return res.json("Update User")
})

// @desc    Authenticate user and get token
// @route   GET /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
  
    const user = await User.findOne({ email });
  
    if (user && (await user.matchPassword(password))) {
      generateToken(res, user._id);
  
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      });
    } else {
      res.status(401);
      throw new Error('Invalid email or password');
    }
  });

// @desc    Register user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
  
    const userExists = await User.findOne({ email });
  
    if (userExists) {
      res.status(400);
      throw new Error('User already exists');
    }
  
    const user = await User.create({
      name,
      email,
      password,
    });
  
    if (user) {
      generateToken(res, user._id);
  
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      });
    } else {
      res.status(400);
      throw new Error('Invalid user data');
    }
  });

// @desc    Logout user/ clear cookie
// @route   POST /api/users/logout
// @access  Private
const logoutUser = asyncHandler (async(req,res) => {
    res.clearCookie('jwt');
    res.status(200).json({ message: 'Logged out successfully' });
})

// @desc    Get user profile
// @route   POST /api/users/profile
// @access  Private
const getUserProfile = asyncHandler (async(req,res) => {
    res.send("Get user profile")
})

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler (async(req,res) => {
    res.send("Update user profile")
})

export {getUsers, getUserById, deleteUser, updateUser,authUser, registerUser, logoutUser,getUserProfile,updateUserProfile};