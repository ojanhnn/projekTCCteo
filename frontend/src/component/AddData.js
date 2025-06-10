import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosJWT, BASE_URL } from "../utils";

const AddKegiatan = () => {
    const [namaKegiatan, setNamaKegiatan] = useState("");
    const [jenisKegiatan, setJenisKegiatan] = useState("Seminar");
    const [tanggal, setTanggal] = useState("");
    const [lokasi, setLokasi] = useState("");
    const [penyelenggara, setPenyelenggara] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [nimMahasiswa, setNimMahasiswa] = useState("");

    const navigate = useNavigate();

    const saveKegiatan = async (e) => {
        e.preventDefault();
        try {
            await axiosJWT.post(`${BASE_URL}/kegiatan`, {
                nama_kegiatan: namaKegiatan,
                jenis_kegiatan: jenisKegiatan,
                tanggal,
                lokasi,
                penyelenggara,
                deskripsi,
                nim_mahasiswa: nimMahasiswa
            });
            navigate("/dashbord");
        } catch (error) {
            console.log("Gagal menambahkan kegiatan:", error);
        }
    };

    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <h1 className="title">Tambah Kegiatan</h1>
                <form onSubmit={saveKegiatan}>
                    <div className="field">
                        <label className="label">Nama Kegiatan</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={namaKegiatan}
                                onChange={(e) => setNamaKegiatan(e.target.value)}
                                placeholder="Contoh: Pelatihan React"
                                required
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Jenis Kegiatan</label>
                        <div className="control">
                            <div className="select">
                                <select value={jenisKegiatan} onChange={(e) => setJenisKegiatan(e.target.value)}>
                                    <option value="Seminar">Seminar</option>
                                    <option value="Workshop">Workshop</option>
                                    <option value="Pelatihan">Pelatihan</option>
                                    <option value="Lomba">Lomba</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Tanggal</label>
                        <div className="control">
                            <input
                                type="date"
                                className="input"
                                value={tanggal}
                                onChange={(e) => setTanggal(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Lokasi</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={lokasi}
                                onChange={(e) => setLokasi(e.target.value)}
                                placeholder="Contoh: Gedung A Lantai 2"
                                required
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Penyelenggara</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={penyelenggara}
                                onChange={(e) => setPenyelenggara(e.target.value)}
                                placeholder="Contoh: Himpunan Mahasiswa TI"
                                required
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Deskripsi</label>
                        <div className="control">
                            <textarea
                                className="textarea"
                                value={deskripsi}
                                onChange={(e) => setDeskripsi(e.target.value)}
                                placeholder="Deskripsi kegiatan"
                                required
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">NIM Mahasiswa</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={nimMahasiswa}
                                onChange={(e) => setNimMahasiswa(e.target.value)}
                                placeholder="Contoh: 210010201"
                                required
                            />
                        </div>
                    </div>

                    <div className="field">
                        <button type="submit" className="button is-success">Simpan</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddKegiatan;
