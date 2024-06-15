import Article from "../models/ArticleModel.js";
import path from "path";
import fs from "fs";

export const getArticles = async(req, res)=>{
    try {
        const response = await Article.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getArticleById = async(req, res)=>{
    try {
        const response = await Article.findOne({
            where:{
                id : req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const saveArticle = (req, res)=>{
    if(req.files === null) return res.status(400).json({msg: "No File Uploaded"});
    const name = req.body.title;
    const description = req.body.description;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedType = ['.png','.jpg','.jpeg'];

    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
    if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

    file.mv(`./public/images/${fileName}`, async(err)=>{
        if(err) return res.status(500).json({msg: err.message});
        try {
            await Article.create({name: name, image: fileName, url: url, description: description});
            res.status(201).json({msg: "Article Created Successfully"});
        } catch (error) {
            console.log(error.message);
        }
    })
}

export const updateArticle = async(req, res)=>{
    const article = await Article.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!article) return res.status(404).json({msg: "No Data Found"});
    
    let fileName = "";
    if(req.files === null){
        fileName = article.image;
    }else{
        const file = req.files.file;
        const fileSize = file.data.length;
        const ext = path.extname(file.name);
        fileName = file.md5 + ext;
        const allowedType = ['.png','.jpg','.jpeg'];

        if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
        if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

        const filepath = `./public/images/${article.image}`;
        fs.unlinkSync(filepath);

        file.mv(`./public/images/${fileName}`, (err)=>{
            if(err) return res.status(500).json({msg: err.message});
        });
    }
    const name = req.body.title;
    const description = req.body.description;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    
    try {
        await Article.update({name: name, image: fileName, url: url, description: description}, {
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Article Updated Successfully"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteArticle = async(req, res)=>{
    const article = await Article.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!article) return res.status(404).json({msg: "No Data Found"});

    try {
        const filepath = `./public/images/${article.image}`;
        fs.unlinkSync(filepath);
        await Article.destroy({
            where:{
                id : req.params.id
            }
        });
        res.status(200).json({msg: "Article Deleted Successfully"});
    } catch (error) {
        console.log(error.message);
    }
}
