import express from "express";
import { getUsers, Register, Login, Logout } from "../controllers/UserController.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import {
    getKegiatan, 
    getKegiatanById, 
    createKegiatan,
    updateKegiatan,
    deleteKegiatan
} from "../controllers/DataController.js";

const router = express.Router();

// Auth routes
router.get('/user', verifyToken, getUsers);
router.post('/user', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);

// Data routes
router.get("/data", verifyToken, getKegiatan);
router.get("/data/:id", verifyToken, getKegiatanById);
router.post("/data", verifyToken, createKegiatan);
router.patch("/data/:id", verifyToken, updateKegiatan);
router.delete("/data/:id", verifyToken, deleteKegiatan);

export default router;
