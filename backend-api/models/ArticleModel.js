import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Article = db.define('article', {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
    description: DataTypes.TEXT // Added this line
}, {
    freezeTableName: true
});

export default Article;

(async () => {
    await db.sync();
})();
