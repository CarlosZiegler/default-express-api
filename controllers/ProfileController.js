
module.exports = {
    async index(req, res, next) {
        //We'll just send back the user details
        res.json({
            message: 'You made it to the secure route',
            user: req.user,
        })
    }
}

