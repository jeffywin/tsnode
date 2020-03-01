import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('api', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
})

export {
    sequelize
}

