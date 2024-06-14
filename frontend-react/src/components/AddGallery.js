import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddGallery = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const saveGallery = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("description", description);
    try {
      await axios.post("http://localhost:5000/galleries", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      setMessage("Gallery added successfully!");
      setTimeout(() => {
        setMessage("");
        navigate("/");
      }, 2000);
    } catch (error) {
      console.log(error);
      setMessage("Failed to add gallery.");
    }
  };

  return (
    <div className="columns is-centered mt-5">
      <div className="column is-half">
        <form onSubmit={saveGallery}>
          <div className="field">
            <label className="label">Gallery Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Gallery Name"
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
                placeholder="Gallery Description"
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

          {preview && (
            <figure className="image is-128x128">
              <img src={preview} alt="Preview Image" />
            </figure>
          )}

          {message && (
            <div className={`notification ${message.includes("successfully") ? "is-success" : "is-danger"}`}>
              {message}
            </div>
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
  );
};

export default AddGallery;
