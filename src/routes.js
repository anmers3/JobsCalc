const express = require('express');
const routes = express.Router()

//req, res (usados para testes com funcao render e renderizados pelo Ejs na funcao render agora passam para o server.js)
//const path = (__dirname + "/views/")


//Chamando os controladores
const ProfileController = require('./controllers/ProfileController.js')
const JobController = require('./controllers/JobController')
const DashboardController = require('./controllers/DashboardController')

routes.get('/index', DashboardController.index)
routes.get('/profile', ProfileController.index)
routes.post('/profile', ProfileController.update)
routes.get('/job', JobController.create)
routes.post('/job', JobController.save)
routes.get('/job/:id', JobController.show)
routes.post('/job/:id', JobController.update)
routes.post('/job/delete/:id', JobController.delete)


 
module.exports = routes;