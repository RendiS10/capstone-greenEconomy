import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

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
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/galleries/${galleryId}`)
          .then(() => {
            Swal.fire(
              'Deleted!',
              'Your gallery has been deleted.',
              'success'
            );
            getGalleries();
          })
          .catch(error => {
            console.error('Error deleting the gallery:', error);
            Swal.fire(
              'Error!',
              'Failed to delete the gallery.',
              'error'
            );
          });
      }
    });
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
                <Link to={`/editgallery/${gallery.id}`}>
                  <FontAwesomeIcon icon={faEdit} />
                </Link>
                <button onClick={() => deleteGallery(gallery.id)}>
                  <FontAwesomeIcon icon={faTrashAlt} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GalleryList;
