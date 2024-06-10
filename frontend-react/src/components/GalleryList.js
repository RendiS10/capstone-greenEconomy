import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const GalleryList = () => {
  const [galleries, setGalleries] = useState([]);

  useEffect(() => {
    getGalleries();
  }, []);

  const getGalleries = async () => {
    const response = await axios.get("http://localhost:5000/galleries");
    setGalleries(response.data);
  };

  const deleteGallery = async (galleryId) => {
    try {
      await axios.delete(`http://localhost:5000/galleries/${galleryId}`);
      getGalleries();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      <Link to="/addgallery" className="button is-success">
        Add New
      </Link>
      
      <div className="columns is-multiline mt-2">
        {galleries.map((gallery) => (
          <div className="column is-one-quarter" key={gallery.id}>
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={gallery.url} alt="Image" />
                </figure>
              </div>

              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{gallery.name}</p>
                    <p className="subtitle is-6">{gallery.description}</p>
                  </div>
                </div>
              </div>

              <footer className="card-footer">
                <Link to={`editgallery/${gallery.id}`} className="card-footer-item">
                  Edit
                </Link>
                <a
                  onClick={() => deleteGallery(gallery.id)}
                  className="card-footer-item"
                >
                  Delete
                </a>
              </footer>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryList;
