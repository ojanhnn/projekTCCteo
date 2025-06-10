import Kegiatan from "../models/DataModel.js";

// Ambil semua data kegiatan
export const getKegiatan = async (req, res) => {
    try {
        const response = await Kegiatan.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Gagal mengambil data kegiatan" });
    }
};

// Ambil satu data kegiatan berdasarkan ID
export const getKegiatanById = async (req, res) => {
    try {
        const response = await Kegiatan.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!response) return res.status(404).json({ msg: "Kegiatan tidak ditemukan" });
        res.status(200).json(response);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Gagal mengambil kegiatan berdasarkan ID" });
    }
};

// Buat data kegiatan baru
export const createKegiatan = async (req, res) => {
    try {
        const {
            nama_kegiatan,
            jenis_kegiatan,
            tanggal,
            lokasi,
            penyelenggara,
            deskripsi,
            nim_mahasiswa
        } = req.body;

        await Kegiatan.create({
            nama_kegiatan,
            jenis_kegiatan,
            tanggal,
            lokasi,
            penyelenggara,
            deskripsi,
            nim_mahasiswa
        });

        res.status(201).json({ msg: "Kegiatan berhasil ditambahkan" });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Gagal membuat kegiatan" });
    }
};

export const updateKegiatan = async (req, res) => {
    try {
        const kegiatan = await Kegiatan.findOne({
            where: { id: req.params.id }
        });
        if (!kegiatan) return res.status(404).json({ msg: "Kegiatan tidak ditemukan" });

        await Kegiatan.update(req.body, {
            where: { id: req.params.id }
        });

        res.status(200).json({ msg: "Kegiatan berhasil diperbarui" });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Gagal memperbarui kegiatan" });
    }
};

// Hapus data kegiatan
export const deleteKegiatan = async (req, res) => {
    try {
        const kegiatan = await Kegiatan.findOne({
            where: { id: req.params.id }
        });
        if (!kegiatan) return res.status(404).json({ msg: "Kegiatan tidak ditemukan" });

        await Kegiatan.destroy({
            where: { id: req.params.id }
        });

        res.status(200).json({ msg: "Kegiatan berhasil dihapus" });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Gagal menghapus kegiatan" });
    }
};
