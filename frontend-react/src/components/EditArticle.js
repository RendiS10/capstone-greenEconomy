import React, { useState, useEffect } from "react";
import axios from "../api/axios"; // Pastikan ini mengarah ke file axios yang benar
import { useParams, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';


const EditArticle = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getArticleById();
  }, []);

  const getArticleById = async () => {
    const response = await axios.get(`http://localhost:5000/articles/${id}`);
    setTitle(response.data.name);
    setDescription(response.data.description);
    setFile(response.data.image);
    setPreview(response.data.url);
  };

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const updateArticle = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("description", description);

    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to save the changes?",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, save it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.patch(`http://localhost:5000/articles/${id}`, formData, {
          headers: {
            "Content-type": "multipart/form-data",
          },
        })
        .then(() => {
          Swal.fire(
            'Updated!',
            'Your article has been updated.',
            'success'
          );
          navigate("/");
        })
        .catch(error => {
          console.error('Error updating the article:', error);
          Swal.fire(
            'Error!',
            'Failed to update the article.',
            'error'
          );
        });
      }
    });
  };

  return (
    <div>
    <nav style={{ backgroundColor: '#81A263', padding: '10px 20px' , display : 'flex' , justifyContent : 'center' , color : 'black' }}>
    <strong>Halaman Edit Data Artikel </strong>
    </nav>
    <div className="columns is-centered mt-5">
      <div className="column is-half">
        <form onSubmit={updateArticle}>
          <div className="field">
            <label className="label">Article Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Article Name"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <textarea
                className="textarea"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Article Description"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Image</label>
            <div className="control">
              <div className="file">
                <label className="file-label">
                  <input
                    type="file"
                    className="file-input"
                    onChange={loadImage}
                  />
                  <span className="file-cta">
                    <span className="file-label">Choose a file...</span>
                  </span>
                </label>
              </div>
            </div>
          </div>

          {preview ? (
            <figure className="image is-128x128">
              <img src={preview} alt="Preview Image" />
            </figure>
          ) : (
            ""
          )}

          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
};

export default EditArticle;
