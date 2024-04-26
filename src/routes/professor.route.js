const { Router } = require('express');
const ProfessorController = require('../controllers/ProfessorController');

const professorRoutes = Router();

professorRoutes.post('/', ProfessorController.cadastrarProfessor);
professorRoutes.get('/', ProfessorController.listarProfessores);
professorRoutes.put('/:id', ProfessorController.editarProfessores);
professorRoutes.delete('/:id', ProfessorController.deletarProfessor);

module.exports = professorRoutes;
