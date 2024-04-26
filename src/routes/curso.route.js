
const { Router, query } = require('express') // 
const Curso = require('../models/Curso')
const CursosController = require('../controllers/CursosController')

const { auth } = require('../middleware/auth')

const cursoRoutes = new Router()

cursoRoutes.post('/', CursosController.cadastrarCurso)
cursoRoutes.get('/', auth,CursosController.listarCurso )
cursoRoutes.delete('/:id', auth, CursosController.deletarCursoId)
cursoRoutes.put('/:id', auth, CursosController.editarCurso )


module.exports = cursoRoutes