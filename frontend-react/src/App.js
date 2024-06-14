import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddGallery from "./components/AddGallery";
import EditGallery from "./components/EditGallery";
import AddArticle from "./components/AddArticle";
import EditArticle from "./components/EditArticle";
import Sidebar from "./components/Sidebar";
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
            <Route path="/" element={<Home />} />
            <Route path="addgallery/" element={<AddGallery />} />
            <Route path="editgallery/:id" element={<EditGallery />} />
            <Route path="addarticle/" element={<AddArticle />} />
            <Route path="editarticle/:id" element={<EditArticle />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
