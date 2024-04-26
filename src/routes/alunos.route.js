const { Router } = require('express') 
const { auth } = require('../middleware/auth')


const AlunoController = require('../controllers/AlunoController')

const alunoRoutes = new Router()

alunoRoutes.post('/',auth, AlunoController.cadastrar)
alunoRoutes.get('/', auth, AlunoController.listarTodos)
alunoRoutes.get('/:id', auth, AlunoController.listarUm)

module.exports = alunoRoutes