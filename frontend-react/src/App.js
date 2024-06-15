import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import AddGallery from "./components/AddGallery";
import EditGallery from "./components/EditGallery";
import AddArticle from "./components/AddArticle";
import EditArticle from "./components/EditArticle";
import Sidebar from "./components/Sidebar";
import ArticleList from './components/ArticleList';
import GalleryList from './components/GalleryList';
import "bulma/css/bulma.css";
import "./App.css"; // Custom CSS to style the layout

function App() {
  return (
        <BrowserRouter>
      <div className="columns">
        <div className="column is-one-fifth">
          <Sidebar />
        </div>
        <div className="column">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="addgallery/" element={<ProtectedRoute><AddGallery /></ProtectedRoute>} />
        <Route path="editgallery/:id" element={<ProtectedRoute><EditGallery /></ProtectedRoute>} />
        <Route path="addarticle/" element={<ProtectedRoute><AddArticle /></ProtectedRoute>} />
        <Route path="editarticle/:id" element={<ProtectedRoute><EditArticle /></ProtectedRoute>} />
        <Route path="/articlelist" element={<ProtectedRoute><ArticleList /></ProtectedRoute>} />
        <Route path="/gallerylist" element={<ProtectedRoute><GalleryList /></ProtectedRoute>} />
      </Routes>
        </div>
        </div>
        </BrowserRouter>
  );
}

export default App;