const Sequelize = require("sequelize");

const restaurantModel = {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    imagelink: {
        type: Sequelize.STRING,
        allowNull: false,
    },
};

const menuModel = {
    title: {
        type: Sequelize.STRING,
        allowNULL: false,
    },
};

const menuItemModel = {
    name: {
        type: Sequelize.STRING,
        allowNULL: false,
    },
    price : {
        type: Sequelize.STRING,
        allowNULL: false,
    },
};

module.exports = {restaurantModel,menuModel,menuItemModel};