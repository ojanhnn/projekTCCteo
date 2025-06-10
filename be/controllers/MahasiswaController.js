import Mahasiswa from "../models/mahasiswa.js";

export const getAllMahasiswa = async (req, res) => {
  try {
    const data = await Mahasiswa.findAll();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createMahasiswa = async (req, res) => {
  try {
    await Mahasiswa.create(req.body);
    res.json({ message: "Mahasiswa berhasil ditambahkan" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
