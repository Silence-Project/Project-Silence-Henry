const { Car, Products, CartProduct } = require('../config/bd');

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
                through: 'CartProduct',
                as: 'shoppingCar',
                attributes: ['id', 'name', 'price']
            }],
        });

        console.log(cars);

        return cars

    } catch (error) {
        return error.message;
    };
};

// UPDATE QUANTITY
const editQuantityProductByCar = async (idCar, idProduct, quantity) => {
    try {
        const car = await Car.findByPk(idCar);

        if (!car) {
            throw new Error('No se encontró ningún carro con el ID proporcionado');
        }

        // Busca el producto en el carrito
        const cartProduct = await CartProduct.findOne({
            where: {
                CarId: idCar,
                ProductId: idProduct
            }
        });

        if (!cartProduct) {
            throw new Error('El producto no se encontró en el carrito');
        }

        // Actualiza la cantidad del producto
        await cartProduct.update({ quantity });

        return `La cantidad del producto con ID ${idProduct} ha sido actualizada a ${quantity} en el carrito con ID ${idCar}.`;

    } catch (error) {
        return error.message;
    }
};

// ADD PRODUCTS BY CAR
const addProductToCart = async (carId, productId, quantity) => {
    try {
        // Verificar si el carrito existe
        const car = await Car.findByPk(carId);
        if (!car) {
            throw new Error('No se encontró ningún carro con el ID proporcionado');
        }

        // Verificar si el producto ya está en el carrito
        let cartProduct = await CartProduct.findOne({
            where: {
                CarId: carId,
                ProductId: productId
            }
        });

        if (cartProduct) {
            // Si el producto ya está en el carrito, actualiza la cantidad
            const newQuantity = cartProduct.quantity + 1;
            await cartProduct.update({ quantity: newQuantity });
        } else {
            // Si el producto no está en el carrito, añádelo al carrito y crea una nueva instancia en CartProduct
            // Crea una nueva instancia en CartProduct
            const newCartProduct = await CartProduct.create({
                quantity: quantity,
                CarId: carId,
                ProductId: productId
            });
        }

        return `Producto con ID ${productId} añadido correctamente al carrito con ID ${carId}.`;

    } catch (error) {
        return error.message;
    }
};

const removeProductFromCart = async (carId, productId) => {
    try {
        const car = await Car.findByPk(carId);
        if (!car) {
            throw new Error('No se encontró ningún carro con el ID proporcionado');
        }

        const cartProduct = await CartProduct.findOne({
            where: {
                CarId: carId,
                ProductId: productId
            }
        });

        if (!cartProduct) {
            throw new Error('El producto no está en el carrito');
        }

        await cartProduct.destroy();

        return `Producto con ID ${productId} eliminado correctamente del carrito con ID ${carId}.`;

    } catch (error) {
        return error.message;
    }
};




module.exports = {
    createCar,
    getCarsWithProducts,
    getDetailCarWithProducts,
    editQuantityProductByCar,
    addProductToCart, 
    removeProductFromCart
}