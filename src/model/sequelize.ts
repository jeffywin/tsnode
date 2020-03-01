import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('api', 'root', 'root', {
    host: 'db',
    dialect: 'mysql',
    logging: false
})

export {
    sequelize
}

