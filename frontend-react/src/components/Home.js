import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [articleCount, setArticleCount] = useState(0);
  const [galleryCount, setGalleryCount] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      const articles = await axios.get("http://localhost:5000/articles");
      const galleries = await axios.get("http://localhost:5000/galleries");
      setArticleCount(articles.data.length);
      setGalleryCount(galleries.data.length);
    };
    fetchCounts();
  }, []);

  return (
    <div>
      <nav style={{ backgroundColor: '#81A263', padding: '10px 20px' , display : 'flex' , justifyContent : 'center' , color : 'black' }}>
        <strong>Green Sustainify Total Data</strong>
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
