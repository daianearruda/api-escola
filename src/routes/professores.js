const { Router, query } = require('express') // 
const Professores = require('../models/Professores')

const { sign } = require('jsonwebtoken')

const loginRoutes = new Router()

// CRUD Professores


loginRoutes.post('/professores', async (req, res) => {
    try{
        const nome = req.body.nome
        const materia = req.body.materia
        const celular = req.body.celular
    
        if(!nome) {
            return res.status(400).json({messagem: 'O nome é obrigatório'})
        }
    
        if(!materia) {
            return res.status(400).json({messagem: 'O nome da matéria é obrigatória'})
        }
    
        const professor = await Professor.create({
            nome: nome,
            materia: materia,
            celular: celular
        })
        res.status(201).json(professor)
        }catch(error){
            console.log(error)
            res.status(500).json({error: 'Não foi possível cadastrar o professor'})
        }
    })
    
    loginRoutes.get('/professores', async (req, res) => {
        const professor = await Professor.findAll()
        res.json(professor)
    })

    loginRoutes.put('/professores/:id', async (req, res) => {
        try {
            const id = req.params.id;
            const { nome, materia, celular } = req.body;
    
            if (!nome) {
                return res.status(400).json({ mensagem: 'O nome é obrigatório' });
            }
    
            if (!materia) {
                return res.status(400).json({ mensagem: 'O nome da matéria é obrigatória' });
            }
    
            const professor = await Professor.findByIdAndUpdate(id, {
                nome: nome,
                materia: materia,
                celular: celular
            }, { new: true });
    
            if (!professor) {
                return res.status(404).json({ mensagem: 'Professor não encontrado' });
            }
    
            res.status(200).json(professor);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Não foi possível atualizar o professor' });
        }
    });
    
    loginRoutes.delete('/professores/:id', (req, res) => {
        const id =  req.params.id
    
        Professor.destroy({
            where: {
                id: id
            }
        })
        res.status(204).json({})
    })






module.exports = loginRoutes

