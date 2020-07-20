const express = require('express');

module.exports = {
    async index(req, res, next) {
        //We'll just send back the user details and the token
        res.json({
            message: 'You made it to the secure route',
            user: req.user,
        })
    }
}

