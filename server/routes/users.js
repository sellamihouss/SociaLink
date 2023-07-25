import express from "express";
import {
    getUser,
    getUserFriends,
    addRemoveFriend
} from "../controllers/users.js"
import {verifyToken} from "../middleware/auth.js"


//Read
const router =express.Router()
