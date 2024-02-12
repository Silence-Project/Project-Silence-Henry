const {AboutUs} = require('../config/bd');

const createDataAboutUs = async (aboutUs, mision, vision, history) => {
    try {
        const newInformation = await AboutUs.create(aboutUs, mision, vision, history)
        console.log(newInformation);
        return newInformation
    } catch (error) {
        return error.message  
    }
}

const updateInformation = async (aboutUs, mision, vision, history) => {
    try {
        let record = await AboutUs.findOne({ where: { id: 1 } });

        if (!record) {
            record = await AboutUs.create({ aboutUs, mision, vision, history, id: 1 });
        }

        const updateText = await AboutUs.update({ aboutUs, mision, vision, history }, {
            where: {
                id: 1
            }
        });

        return updateText;
    } catch (error) {
        return error.message;
    }
}


const getInformation= async () => {
    try {
        const information = await AboutUs.findOne({where: {id: 1}})

        return information
    } catch (error) {
        return error.message
    }
}


module.exports = {
    createDataAboutUs,
    updateInformation,
    getInformation
}