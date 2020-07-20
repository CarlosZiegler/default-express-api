const express = require("express");
const passport = require('passport');
const AuthController = require("./controllers/AuthController");
const ProfileController = require("./controllers/ProfileController");

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
routes.post("/login", AuthController.index);

/**
 * @swagger
 * /profile:
 *  post:
 *    description: access the route only with valid token
 *       
 */
routes.get("/profile", passport.authenticate('jwt', { session: false }), ProfileController.index);


module.exports = routes;
