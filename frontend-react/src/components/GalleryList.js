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
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {galleries.map((gallery, index) => (
            <tr key={gallery.id}>
              <td>{index + 1}</td>
              <td>{gallery.name}</td>
              <td>{gallery.description}</td>
              <td>
                <Link to={`/editgallery/${gallery.id}`}>Edit</Link>
                <button onClick={() => deleteGallery(gallery.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GalleryList;
