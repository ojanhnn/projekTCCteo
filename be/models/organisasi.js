import { DataTypes } from "sequelize";
import db from "../config/database.js";

const Organisasi = db.define("Organisasi", {
  nama: { type: DataTypes.STRING, primaryKey: true },
  deskripsi: DataTypes.TEXT,
  bidang: DataTypes.STRING,
  email_kontak: DataTypes.STRING,
  nomor_kontak: DataTypes.STRING,
}, {
    freezeTableName: true
});

export default Organisasi;
