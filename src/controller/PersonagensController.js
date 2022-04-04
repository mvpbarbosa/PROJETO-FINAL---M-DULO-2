import {  personagens_table  } from '../models/personagem.js'

export const getIndex = async (req, res) => {
    try{
        const personagens = await personagens_table.findAll({
            order: [["nome", "ASC"]]
        })
        res.status(200).render("index.ejs", {
            personagens
        })
    }

    catch (err){
        res.status(500).send({
            err: err.message
        })
    }
}

export const getDetalhes = async (req, res) => {
    try{
        const personagem = await personagens_table.findByPk(req.params.id)
        res.status(200).render("detalhes.ejs", {
            personagem
        })
    }
    
    catch (err){
        res.status(500).send({
            err: err.message
        })
    }

}

export const getDeletar = async (req,res) =>{
    try{
        await personagens_table.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/')
    }
    catch (err){
        res.status(500).send({
            err: err.message
        })
    }
}

export const getCriar = (req, res) => {
    res.status(200).render("criar.ejs")
}

export const postCriar = async (req,res) => {
    try {
        const {nome, cla, vila, idade, altura, peso, sexo, patente, transformacao, imagem} = req.body
        await personagens_table.create({
            nome, cla, vila, idade, altura, peso, sexo, patente, transformacao, imagem
        })
        res.status(200).redirect("/")
    }
    catch (err){
        res.status(500).send({
            err: err.message
        })
    } 
}    

export const getEditar = async (req, res) => {
    const personagem = await personagens_table.findByPk(req.params.id)
    res.status(200).render("editar.ejs", {
        personagem
    })
}

export const postEditar = async (req, res) => {
    const {nome, cla, vila, idade, altura, peso, sexo, patente, transformacao, imagem} = req.body
    try {
        await personagens_table.update({
            nome: nome, 
            cla: cla, 
            vila: vila, 
            idade: idade, 
            altura: altura,
            peso: peso, 
            sexo: sexo, 
            patente: patente, 
            transformacao: transformacao, 
            imagem: imagem
        }, {
            where: {
                id: req.params.id
            }
        })

        res.redirect("/")
    }
    catch (err){
        res.status(500).send({
            err: err.message
        })
    }
}