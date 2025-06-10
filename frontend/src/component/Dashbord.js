import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import { useNavigate, Link } from 'react-router-dom';

const BASE_URL = "http://localhost:5000";

const Dashboard = () => {
    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [kegiatan, setKegiatan] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const initialize = async () => {
            await refreshToken();
            await getKegiatan();
        };
        initialize();
    }, []);

    const refreshToken = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/token`);
            setToken(response.data.accessToken);
            const decoded = jwtDecode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        } catch (error) {
            if (error.response) {
                navigate("/");
            }
        }
    };

    const axiosJWT = axios.create();

    axiosJWT.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
            const response = await axios.get(`${BASE_URL}/token`);
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decoded = jwtDecode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });

    const getKegiatan = async () => {
        try {
            const response = await axiosJWT.get(`${BASE_URL}/kegiatan`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setKegiatan(response.data);
        } catch (error) {
            console.error("Gagal mengambil data kegiatan:", error);
        }
    };

    const deleteKegiatan = async (id) => {
        try {
            await axiosJWT.delete(`${BASE_URL}/kegiatan/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            getKegiatan();
        } catch (error) {
            console.error("Gagal menghapus kegiatan:", error);
        }
    };

    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-full">
                <h1 className="title">Selamat datang, {name}</h1>
                <Link to="/add" className="button is-success mb-4">Tambah Kegiatan</Link>
                <table className="table is-striped is-fullwidth">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama Kegiatan</th>
                            <th>Jenis</th>
                            <th>Tanggal</th>
                            <th>Lokasi</th>
                            <th>Penyelenggara</th>
                            <th>Deskripsi</th>
                            <th>NIM Mahasiswa</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {kegiatan.map((item, index) => (
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item.nama_kegiatan}</td>
                                <td>{item.jenis_kegiatan}</td>
                                <td>{new Date(item.tanggal).toLocaleDateString()}</td>
                                <td>{item.lokasi}</td>
                                <td>{item.penyelenggara}</td>
                                <td>{item.deskripsi}</td>
                                <td>{item.nim_mahasiswa}</td>
                                <td>
                                    <Link to={`/edit/${item.id}`} className="button is-small is-info mr-2">Edit</Link>
                                    <button onClick={() => deleteKegiatan(item.id)} className="button is-small is-danger">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;
