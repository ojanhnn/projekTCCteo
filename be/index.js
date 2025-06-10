import express from "express";
import db from "./config/database.js";
import mahasiswaRoute from "./routes/MahasiswaRoute.js";
import "./models/mahasiswa.js";
import "./models/kegiatan.js";
import "./models/organisasi.js";
import "./models/pendaftaran.js";
import "./models/pesertaKegiatan.js";
import "./models/feedback.js";

const app = express();
const PORT = 5000;

// Middleware untuk parsing JSON
app.use(express.json());

// Tes koneksi database dan sinkronisasi
(async () => {
  try {
    await db.authenticate();
    console.log("✅ Database connected...");
    await db.sync();
    console.log("✅ Semua tabel telah disinkronkan.");
  } catch (error) {
    console.error("❌ Connection error:", error);
  }
})();

// Routing
app.use("/api", mahasiswaRoute);

// Bisa tambahkan route lainnya di sini nanti
// app.use("/api", kegiatanRoute);
// app.use("/api", organisasiRoute);
// app.use("/api", pendaftaranRoute);

app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
