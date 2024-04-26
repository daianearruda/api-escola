const Professor = require('../models/Professores')

class ProfessorController {
    async cadastrarProfessor(req,res){
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
    }

    async listarProfessores(req,res){
        const professor = await Professor.findAll()
        res.json(professor)
    }

    async editarProfessores(req,res){
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
    }

    async deletarProfessor(req,res){
        const id =  req.params.id
    
        Professor.destroy({
            where: {
                id: id
            }
        })
        res.status(204).json({})
    }
}

module.exports= new ProfessorController()