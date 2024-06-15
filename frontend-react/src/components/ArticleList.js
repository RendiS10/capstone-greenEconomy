import React, { useState, useEffect } from "react";
import axios from "axios";
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
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article, index) => (
            <tr key={article.id}>
              <td>{index + 1}</td>
              <td>{article.title}</td>
              <td>{article.description}</td>
              <td>
                <Link to={`/editarticle/${article.id}`}>Edit</Link>
                <button onClick={() => deleteArticle(article.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArticleList;
