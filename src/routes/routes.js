const { Router } = require("express");
const alunoRoutes = require("./alunos.route");
const cursoRoutes = require("./curso.route");
const loginRoutes = require("./login.route");
const matriculaRoutes= require("./matricula.route");
const professorRoutes=require("./professor.route");

const routes = Router()

routes.use('/alunos', alunoRoutes)
routes.use('/cursos', cursoRoutes)
routes.use('/login', loginRoutes)
routes.use('/professores', professorRoutes)
routes.use('/matriculas', matriculaRoutes)

module.exports = routes