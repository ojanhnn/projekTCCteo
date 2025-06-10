import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Kegiatan = db.define("kegiatan", {
    nama_kegiatan: DataTypes.STRING,
    jenis_kegiatan: DataTypes.STRING,
    tanggal: DataTypes.DATE,
    lokasi: DataTypes.STRING,
    penyelenggara: DataTypes.STRING,
    deskripsi: DataTypes.TEXT,
    nim_mahasiswa: DataTypes.STRING
}, {
    freezeTableName: true
});

export default Kegiatan;
