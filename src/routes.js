const express = require('express');
const routes = express.Router()

//req, res (usados para testes com funcao render, agora são renderizados pelo Ejs na funcao render)


const path = (__dirname + "/views/")

routes.get('/index', (req, res) => {return res.render(path + "index")})
routes.get('/job', (req, res) => {return res.render(path + "job")})
routes.get('/job-edit', (req, res) => {return res.render(path + "job-edit")})
routes.get('/profile', (req, res) => {return res.render(path + "profile")})




module.exports = routes;
