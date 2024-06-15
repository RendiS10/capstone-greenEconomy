import React, { useState, useEffect } from "react";
import axios from "../api/axios"; // Pastikan ini mengarah ke file axios yang benar
import { Link } from "react-router-dom";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = async () => {
    const response = await axios.get("http://localhost:5000/articles");
    setArticles(response.data);
  };

  const deleteArticle = async (articleId) => {
    try {
      await axios.delete(`http://localhost:5000/articles/${articleId}`);
      getArticles();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      <Link to="/addarticle" className="button is-success">
        Add New
      </Link>
      
      <div className="columns is-multiline mt-2">
        {articles.map((article) => (
          <div className="column is-one-quarter" key={article.id}>
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={article.url} alt="Image" />
                </figure>
              </div>

              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{article.name}</p>
                    <p className="subtitle is-6">{article.description}</p>
                  </div>
                </div>
              </div>

              <footer className="card-footer">
                <Link to={`editarticle/${article.id}`} className="card-footer-item">
                  Edit
                </Link>
                <a
                  onClick={() => deleteArticle(article.id)}
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

export default ArticleList;
