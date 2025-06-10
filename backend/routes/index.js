import express from "express";
import { getUsers, Register, Login, Logout} from "../controllers/UserController.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import {
    getData, 
    getDataById, 
    createData,
    updateData,
    deleteData
} from "../controllers/DataController.js";

const router = express.Router();

router.get('/user', verifyToken, getUsers);
router.post('/user', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);

router.get("/data", verifyToken, getData);
router.get("/data/:id", verifyToken, getDataById);
router.post("/data", verifyToken, createData);
router.patch("/data/:id", verifyToken, updateData);
router.delete("/data/:id", verifyToken, deleteData);


export default router;