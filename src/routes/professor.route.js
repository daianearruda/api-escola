const { Router } = require('express');
const ProfessorController = require('../controllers/ProfessorController');
const {auth} = require('../middleware/auth')

const professorRoutes = Router();

professorRoutes.post('/', auth, ProfessorController.cadastrarProfessor);
professorRoutes.get('/',auth, ProfessorController.listarProfessores);
professorRoutes.put('/:id',auth, ProfessorController.editarProfessores);
professorRoutes.delete('/:id',auth, ProfessorController.deletarProfessor);

module.exports = professorRoutes;
