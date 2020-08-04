const express = require("express");
const passport = require('passport');
const AuthController = require("./controllers/AuthController");
const Controller = require("./controllers/Controller");

const routes = express.Router();

//Documentation for Swagger https://github.com/fliptoo/swagger-express 
//http://localhost:3000/api-docs

/**
 * @swagger
 * /signup:
 *  post:
 *    description: create a user
 *       
 */
routes.post("/signup", passport.authenticate('signup', { session: false }), AuthController.store);

/**
 * @swagger
 * /login:
 *  post:
 *    description: Sign in with email and password
 *       
 */
routes.get("/main", Controller.index);


module.exports = routes;
