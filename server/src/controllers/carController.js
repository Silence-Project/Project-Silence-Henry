const { Car, Products } = require('../config/bd');

// CREATE CAR

const createCar = async (idUser, products) => {
    try {
        const existingCar = await Car.findOne({ where: { idUser: idUser } });

        if (existingCar) {
            throw new Error(`Ya existe un carro para el usuario id: ${idUser}`);
        }

        const newCarShopping = await Car.create({
            idUser,
        });

        if (products && products.length > 0) {
            await newCarShopping.addShoppingCar(products);
        }

        return [newCarShopping];
    } catch (error) {
        return error.message;
    }
};


// GET Cars
const getCarsWithProducts = async () => {
    try {
        const cars = await Car.findAll({
            include: [{
                model: Products,
                through: 'car_products', 
                as: 'shoppingCar',
                attributes: ['id', 'name', 'price']
            }],
        });

        const carsWithProducts = cars.map((car) => {
            return {
                id: car.id,
                idUser: car.idUser,
                products: Array.isArray(car.shoppingCar) ? 
                    car.shoppingCar.map((product) => {
                        return {
                            id: product.id,
                            name: product.name,
                            price: product.price,
                        };
                    }) : [] 
            };
        });

        return carsWithProducts;
    } catch (error) {
        return error.message;
    }
};




// Update --> Add products to car



// Update --> Remover products to car



// Get details about car by user

module.exports = {
    createCar, 
    getCarsWithProducts
}