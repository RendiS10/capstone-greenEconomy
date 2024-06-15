import React, { useState, useEffect } from "react";
import axios from "../api/axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

const truncateDescription = (description) => {
  return description.length > 50 ? description.substring(0, 50) + '...' : description;
};


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
       <nav style={{ backgroundColor: '#81A263', padding: '10px 20px' , display : 'flex' , justifyContent : 'center' , color : 'black' }}>
        <strong>Green Sustainify Gallery List Option</strong>
      </nav>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th style={{ textAlign: 'center' }}>Name</th>
            <th style={{ textAlign: 'center' }}>Description</th>
            <th style={{ textAlign: 'center' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {galleries.map((gallery, index) => (
            <tr key={gallery.id}>
              <td style={{ textAlign: 'center' }}>
                {index + 1}
              </td>
              <td>
                {gallery.name}
              </td>
              <td style={{ textAlign: 'center' }}>
                {truncateDescription(gallery.description)}
              </td>
              <td style={{ textAlign: 'center', width: '20%' }}>
                <Link to={`/editgallery/${gallery.id}`} style={{ marginRight: '1rem' }}>
                  <FontAwesomeIcon icon={faEdit} style={{ fontSize: '1.25rem' }} />
                </Link>
                <button onClick={() => deleteGallery(gallery.id)} style={{ fontSize: '1.25rem' }}>
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
