import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Gallery = db.define('gallery',{
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
    description: DataTypes.TEXT // Added this line
},{
    freezeTableName: true
});

export default Gallery;

(async()=>{
    await db.sync();
})();