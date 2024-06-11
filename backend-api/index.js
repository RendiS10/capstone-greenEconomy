import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import GalleryRoute from "./routes/GalleryRoute.js";
import ArticleRoute from "./routes/ArticleRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(GalleryRoute);
app.use(ArticleRoute);


app.listen(5000, ()=> console.log('Server Up and Running...'));