import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

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
    // Periksa token di localStorage untuk menentukan status login
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleAuthAction = () => {
    if (isLoggedIn) {
      localStorage.removeItem('token');
      setIsLoggedIn(false);
      navigate('/login');
    } else {
      navigate('/login');
    }
  };

  return (
    <div>
      <nav style={{ backgroundColor: '#81A263', padding: '10px 20px' , display : 'flex' , justifyContent : 'center' , color : 'black' }}>
        <strong>Green Sustainify Total Data</strong>
        <button onClick={handleAuthAction}>{isLoggedIn ? 'Logout' : 'Login'}</button>
      </nav>
      <div className="tile is-ancestor">
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
      </div>
    </div>
  );
};

export default Home;
