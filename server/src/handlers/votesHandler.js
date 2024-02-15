const { 
    getVoteUserId,
    getVoteProductsById,
    postNewVotes,
} = require('../controllers/votesController');

const getVotesIdUserHandler = async(req,res)=>{
    const {id} = req.params
    console.log("idUser--->", id);
    try {
        const response = await getVoteUserId(id)
        res.status(200).json(response)
    }
    catch(error){
        console.log(error);
        res.status(400).send(`No se pudo recuperar información del voto del usuario con id--> ${id}`);
    }
}

const getVotesProductHandler = async(req,res)=>{
    const {id} = req.params
    try {
        const response = await getVoteProductsById(id)
        res.status(200).json(response)
    }
    catch(error){
        console.log(error);
        res.status(400).send(`No se pudo recuperar información del voto con id--> ${id}`);
    }
}

const postNewVotesHandler = async(req,res)=>{
    const {idProduct, idUser, vote, comment} = req.body;
    try{
        const newVote = await postNewVotes(idProduct, idUser, vote, comment)
        res.status(200).json(newVote)
    }catch(error){
        console.log(error);
        res.status(400).send(`No se pudo crear el registro del voto`)
    }
}

module.exports = {
    getVotesIdUserHandler,
    getVotesProductHandler, 
    postNewVotesHandler,
}