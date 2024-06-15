import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

const truncateDescription = (description) => {
  return description.length > 300 ? description.substring(0, 300) + '...' : description;
};

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = async () => {
    const response = await axios.get("http://localhost:5000/articles");
    console.log(response.data);  // Tambahkan ini untuk memeriksa data
    setArticles(response.data);
  };

  const deleteArticle = async (articleId) => {
    Swal.fire({
      name: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/articles/${articleId}`)
          .then(() => {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            );
            // Refresh the articles list
            getArticles();
          })
          .catch(error => {
            console.error('Error deleting the article:', error);
            Swal.fire(
              'Error!',
              'Failed to delete the article.',
              'error'
            );
          });
      }
    });
  };

  return (
    <div className="container mt-5">
      <h1><strong>
        Article List
        </strong>
        </h1>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th style={{ textAlign: 'center' }}>Title</th>
            <th style={{ textAlign: 'center' }}>Description</th>
            <th style={{ textAlign: 'center' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article, index) => (
            <tr key={article.id}>
              <td style={{ textAlign: 'center' }}>
                {index + 1}
              </td>
              <td>
                {article.name}
              </td>
              <td style={{ textAlign: 'center' }}>
                {truncateDescription(article.description)}
              </td>
              <td style={{ textAlign: 'center', width: '20%' }}>
                <Link to={`/editarticle/${article.id}`} style={{ marginRight: '1rem' }}>
                  <FontAwesomeIcon icon={faEdit} style={{ fontSize: '1.25rem' }} />
                </Link>
                <button onClick={() => deleteArticle(article.id)} style={{ fontSize: '1.25rem' }}>
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

export default ArticleList;
