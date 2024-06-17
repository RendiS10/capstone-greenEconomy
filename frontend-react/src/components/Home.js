import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Home = () => {
  const [articleCount, setArticleCount] = useState(0);
  const [galleryCount, setGalleryCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCounts = async () => {
      const articles = await axios.get("http://localhost:5000/articles");
      const galleries = await axios.get("http://localhost:5000/galleries");
      setArticleCount(articles.data.length);
      setGalleryCount(galleries.data.length);
    };
    fetchCounts();
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleAuthAction = () => {
    if (isLoggedIn) {
      Swal.fire({
        title: 'Apakah Anda yakin?',
        text: "Anda akan logout dari sistem!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, logout!'
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem('token');
          setIsLoggedIn(false);
          navigate('/login');
          Swal.fire(
            'Logged Out!',
            'Anda telah berhasil logout.',
            'success'
          )
        }
      });
    } else {
      navigate('/login');
    }
  };

  return (
    <div>
      <nav style={{ backgroundColor: '#81A263', padding: '10px 20px', display: 'flex', justifyContent: 'center', color: 'black' }}>
        <strong>Green Sustainify Total Data</strong>
      </nav>
      <div className="tile is-ancestor" style={{ padding: '20px' }}>
        <div className="tile is-parent">
          <article className="tile is-child box notification is-primary">
            <p className="title">Data Artikel</p>
            <p className="subtitle">{articleCount}</p>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child box notification is-warning">
            <p className="title">Gallery</p>
            <p className="subtitle">{galleryCount}</p>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child box notification" onClick={handleAuthAction} style={{ cursor: 'pointer', backgroundColor: isLoggedIn ? '#d33' : 'info' }}>
            <p className="title">{isLoggedIn ? 'Logout' : 'Login'}</p>
            <i className={`fas ${isLoggedIn ? 'fa-sign-out-alt' : 'fa-sign-in-alt'}`} style={{ fontSize: '24px' }}></i>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Home;