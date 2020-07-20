const express = require("express");
const passport = require('passport');
const AuthController = require("./controllers/AuthController");
const ProfileController = require("./controllers/ProfileController");

const routes = express.Router();

/**
 * @swagger
 * /signup:
 *  post:
 *    description: create a user
 *       
 */
routes.post("/signup", passport.authenticate('signup', { session: false }), AuthController.store);


routes.post("/login", AuthController.index);
routes.get("/profile", passport.authenticate('jwt', { session: false }), ProfileController.index);


module.exports = routes;
