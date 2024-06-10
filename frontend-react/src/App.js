import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import AddGallery from "./components/AddGallery";
import EditGallery from "./components/EditGallery";
import AddArticle from "./components/AddArticle";
import EditArticle from "./components/EditArticle";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="addgallery/" element={<AddGallery/>}/>
        <Route path="editgallery/:id" element={<EditGallery/>}/>
        <Route path="addarticle/" element={<AddArticle/>}/>
        <Route path="editarticle/:id" element={<EditArticle/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
