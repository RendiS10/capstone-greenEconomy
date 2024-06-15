import React, { useState } from "react";
import axios from "../api/axios"; // Import the axios instance with token handling
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';

const AddArticle = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const saveArticle = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("file", file);

    try {
      await axios.post("/articles", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      swal("Success", "Article added successfully!", "success");
      navigate("/");
    } catch (error) {
      console.error("Error adding article:", error);
      swal("Failed", "Failed to add article.", "error");
    }
  };

  return (
    <div>
      <nav style={{ backgroundColor: '#81A263', padding: '10px 20px' , display : 'flex' , justifyContent : 'center' , color : 'black' }}>
        <strong>Halaman Menambah Data Artikel</strong>
      </nav>
    <div className="columns is-centered mt-5">
      <div className="column is-half">
        <form onSubmit={saveArticle}>
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
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
};

export default AddArticle;