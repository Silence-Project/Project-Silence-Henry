const { Car, Products} = require('../config/bd');

// CREATE CAR

const createCar = async (idUser, products) => {
    try {
        const existingCar = await Car.findOne({ where: { idUser: idUser } });

        if (existingCar) {
            throw new Error(`Ya existe un carro para el usuario id: ${idUser}`);
        }

        const newCarShopping = await Car.create({
            idUser
        });

        await newCarShopping.addShoppingCar(products);

        return [...newCarShopping];
    } catch (error) {
        return error.message;
    }
};


// GET Cars --> ADMI need watch cars when they have products and the user do not has do the checkout 
const getCarsWithProducts = async () => {
    try {
        const cars = await Car.findAll({
            include: [{
                model: Products,
                through: 'CartProduct',
                as: 'shoppingCar',
                attributes: ['id']
            }],
        });

        return cars;
    } catch (error) {
        return error.message;
    }
};


// GET CAR DETAIL BY USER
const getDetailCarWithProducts = async (idUser) => {
    try {
        const cars = await Car.findAll({
            where: { idUser: idUser },
            include: [{
                model: Products,
                through: 'car_products',
                as: 'shoppingCar',
                attributes: ['id', 'name', 'price']
            }],
        });

        console.log(cars);

        return cars

    } catch (error) {
        return error.message;
    }
};

// ADD products to car --> UPDATE


// Update --> Add products to car



// Update --> Remover products to car



// Get details about car by user

module.exports = {
    createCar,
    getCarsWithProducts,
    getDetailCarWithProducts
}