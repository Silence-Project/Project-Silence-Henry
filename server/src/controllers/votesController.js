require('dotenv').config();
const { USER, PASSWORD, HOST, PORT, BDD } = process.env
const { Sequelize } = require('sequelize');
const {Votes} = require('../config/bd')
const url=`http://localhost:3001/votes`;
const sequelize = new Sequelize(
    `postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${BDD}`, { logging: false, native: false }
)

const getVoteUserId = async(id)=>{
    const votesDB = await Votes.findAll({
        where: { idUser: id }
    });
    return votesDB;
}

const getVoteProductsById = async(id)=>{
    const votesDB = await Votes.findAll({
        attributes: ['comment'],
        where: { idProduct: id }
    });
    const promedio = await Votes.findAll({
        attributes: [[sequelize.fn('AVG', sequelize.col('vote')), 'promedio']],
        where: { idProduct: id }
    });
    const count = await Votes.count({
        where: { idProduct: id }
    });
    promedio.push({count: count})
    return promedio.concat(votesDB);
}

const postNewVotes = async(idProduct, idUser, vote, comment)=>{
    const newVote = await Votes.create(
        {idProduct, idUser, vote, comment})
    const promedio = await Votes.findAll({
        attributes: [[sequelize.fn('AVG', sequelize.col('vote')), 'promedio']],
        where: { idProduct: idProduct }
    });
    const count = await Votes.count({
        where: { idProduct: idProduct }
    });
    promedio.push({count: count})
    return promedio.concat(newVote);
}

module.exports = {
    getVoteUserId,
    getVoteProductsById,
    postNewVotes
}