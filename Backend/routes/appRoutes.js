const express = require("express")
const Router = express.Router();
const {Home, Register, Login} = require("../controllers/controllers")

Router.route('/').get(Home)
Router.route('/register').post(Register)
Router.route('/login').post(Login)

module.exports = Router;