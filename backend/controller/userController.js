import asyncHandler from '../middleware/asyncHandler.js';
import User from "../models/userModel.js"

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
const getUserbyId = asyncHandler (async(req,res) => {
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
const authUser = asyncHandler (async(req,res) => {
    const {email,password} = req.body
    const user = await User.findOne({email:email})
    if(user && (await user.matchPassword(password))){
        res.json({
            _id: req._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        })
    }
    else{
        res.status(401);
        throw new Error('Invalid email or password')
    }
    res.send("Auth user")
})

// @desc    Register user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler (async(req,res) => {
    res.send("Register user")
})

// @desc    Logout user/ clear cookie
// @route   POST /api/users/logout
// @access  Private
const logoutUser = asyncHandler (async(req,res) => {
    res.send("Logout user")
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

export {getUsers, getUserbyId, deleteUser, updateUser,authUser, registerUser, logoutUser,getUserProfile,updateUserProfile};