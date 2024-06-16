import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
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
      localStorage.setItem('token', response.data.token);
      navigate('/');
    } catch (error) {
      // Menangkap error dari response dan menampilkan pesan yang sesuai
      setError('Nama pengguna atau kata sandi salah');
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login Admin</h2>
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
        <p className="login-note">Login sementara untuk admin</p>
      </div>
      <div className="login-image">
        <img src="../img/img_login.jpeg" alt="Login Illustration" />
      </div>
    </div>
  );
};

export default Login;
