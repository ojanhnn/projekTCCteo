import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const [emailOrUsername, setEmailOrUsername] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const Auth = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', {
                email: emailOrUsername,
                password: password,
            });

            // Simpan token ke localStorage
            localStorage.setItem("token", response.data.accessToken);

            // Navigasi ke dashboard
            navigate("/dashbord");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg || "Login gagal");
            } else {
                setMsg("Terjadi kesalahan jaringan");
            }
        }
    };

    return (
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <form onSubmit={Auth} className="box">
                                <p className="has-text-centered has-text-danger">{msg}</p>

                                <div className="field mt-5">
                                    <label className="label">Email atau Username</label>
                                    <div className="controls">
                                        <input
                                            type="text"
                                            className="input"
                                            placeholder="Email atau Username"
                                            value={emailOrUsername}
                                            onChange={(e) => setEmailOrUsername(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="field mt-5">
                                    <label className="label">Password</label>
                                    <div className="controls">
                                        <input
                                            type="password"
                                            className="input"
                                            placeholder="********"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="field mt-5">
                                    <button className="button is-success is-fullwidth" type="submit">
                                        Login
                                    </button>
                                </div>

                                <div className="has-text-centered mt-3">
                                    <p>
                                        Belum punya akun?{" "}
                                        <Link to="/register" className="has-text-link">
                                            Register
                                        </Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
