import { DataTypes } from "sequelize";
import db from "../config/database.js";

const Mahasiswa = db.define("Mahasiswa", {
  nim: { type: DataTypes.STRING, primaryKey: true },
  nama: DataTypes.STRING,
  jurusan: DataTypes.STRING,
  angkatan: DataTypes.INTEGER,
  email: DataTypes.STRING,
  no_hp: DataTypes.STRING,
  alamat: DataTypes.STRING,
  foto: DataTypes.STRING,
}, {
    freezeTableName: true
});

export default Mahasiswa;
