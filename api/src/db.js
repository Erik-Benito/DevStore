import initdb from './models/init-models.js'
import Sequelize from 'sequelize';
const sequelize = new Sequelize(
'devstore',
'root',
'Rtr171100,', {
host: 'localhost',
dialect: 'mysql',
logging: false
});
const db = initdb(sequelize);
export default db;