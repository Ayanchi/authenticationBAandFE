const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    'shiba',
    'postgres',
    'bibij',
    {
        dialect: 'postgres',
        host: 'localhost',
        port: 1033,
    }
)