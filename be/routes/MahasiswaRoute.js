import express from "express";
import { getAllMahasiswa, createMahasiswa } from "../controllers/MahasiswaController.js";

const router = express.Router();

router.get("/mahasiswa", getAllMahasiswa);
router.post("/mahasiswa", createMahasiswa);

export default router;
