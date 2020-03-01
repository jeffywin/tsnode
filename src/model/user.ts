import { Model, DataTypes } from 'sequelize';
import { sequelize } from './sequelize';

class User extends Model {}

User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
}, { sequelize, modelName: 'user' });

sequelize.sync({ force: true })
    .then(() => User.create({
        username: 'jeffywin',
        password: '123456',
        email: 'jeffywin@123.com'
    }))
    .then((result: User) => {
        console.log(result.toJSON());
    });

export {
    User
}