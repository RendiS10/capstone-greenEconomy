import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../styles/styles.css'; // Make sure this points to your CSS file

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', {
        username,
        password
      });
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        Swal.fire({
          icon: 'success',
          title: 'Login Berhasil!',
          text: 'Anda telah berhasil login.',
        }).then(() => {
          navigate('/');
        });
      } else {
        throw new Error('No token received');
      }
    } catch (error) {
      console.error('Login failed:', error);
      if (error.response && error.response.data) {
        if (error.response.data.error === 'User not found') {
          Swal.fire({
            icon: 'error',
            title: 'Gagal Login',
            text: 'Username tidak ditemukan!',
          });
          setError('Username tidak ditemukan');
        } else if (error.response.data.error === 'Invalid password') {
          Swal.fire({
            icon: 'error',
            title: 'Gagal Login',
            text: 'Password tidak sesuai!',
          });
          setError('Password tidak sesuai');
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Gagal Login',
            text: 'Login gagal, silakan coba lagi.',
          });
          setError('Login gagal, silakan coba lagi');
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Gagal Login',
          text: 'Terjadi kesalahan, silakan coba lagi.',
        });
        setError('Terjadi kesalahan, silakan coba lagi');
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title"><b><i>LOGIN ADMIN</i></b></h2>
        <form onSubmit={handleLogin}>
          <div className="field">
            <label className="label">Nama Pengguna atau Alamat Email</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                type="password"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
          </div>

          {error && <p className="help is-danger">{error}</p>} {/* Menampilkan pesan error jika ada */}

          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Login
              </button>
            </div>
          </div>
        </form>
        <p className="login-note"><i>login sementara hanya untuk admin !</i></p>
      </div>
      <div className="login-image">
        <img src="../img/img_login.jpeg" alt="" />
      </div>
    </div>
  );
};

export default Login;
