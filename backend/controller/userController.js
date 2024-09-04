import asyncHandler from '../middleware/asyncHandler.js';
import User from "../models/userModel.js"
import jwt from "jsonwebtoken"

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
const authUser = asyncHandler (async(req,res) => {
    const {email,password} = req.body
    const user = await User.findOne({email:email})
    if(user && (await user.matchPassword(password))){

        const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {
            expiresIn: '30d'
        })

        res.cookie('jwt',token,{
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            sameSite: "strict",
            maxAge: 30*24*60*60*1000 //30 days
        })

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