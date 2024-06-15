import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import AddGallery from "./components/AddGallery";
import EditGallery from "./components/EditGallery";
import AddArticle from "./components/AddArticle";
import EditArticle from "./components/EditArticle";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="addgallery/" element={<ProtectedRoute><AddGallery /></ProtectedRoute>} />
        <Route path="editgallery/:id" element={<ProtectedRoute><EditGallery /></ProtectedRoute>} />
        <Route path="addarticle/" element={<ProtectedRoute><AddArticle /></ProtectedRoute>} />
        <Route path="editarticle/:id" element={<ProtectedRoute><EditArticle /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
