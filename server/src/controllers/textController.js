const {Text} = require('../config/bd');

const createTopText = async (description) => {
    try {
        const newText = await Text.create(description)
        console.log(newText);
        return newText

    } catch (error) {
        return error.message  
    }
}

const updateTopText = async (textId, description) => {
    try {
        const updateText = await Text.update({ description }, {
            where: {
                id: textId
            }
        });
        return updateText;
    } catch (error) {
        return error.message;
    }
}


module.exports = {
    createTopText,
    updateTopText
}