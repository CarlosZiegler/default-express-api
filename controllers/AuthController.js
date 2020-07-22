const passport = require('passport');
const jwt = require('jsonwebtoken');
const jwtSecret = require('../jwtConfig')

module.exports = {
    // Create new User account
    async store(req, res, next) {
        res.json({
            message: 'Signup successful',
            user: req.user
        });
    },

    // Signup user with email and password 
    async index(req, res, next) {
        passport.authenticate('login', async (err, user, info) => {
            try {
                if (err || !user) {
                    const error = new Error('An Error occurred')
                    return next(error);
                }
                req.login(user, { session: false }, async (error) => {
                    if (error) return next(error)
                    //We don't want to store the sensitive information such as the
                    //user password in the token so we pick only the email and id
                    const body = { _id: user._id, email: user.email };
                    //Sign the JWT token and populate the payload with the user email and id
                    const token = jwt.sign({ user: body }, jwtSecret.secret);
                    //Send back the token to the user
                    return res.json({ token });
                });
            } catch (error) {
                return next(error);
            }
        })(req, res, next);
    }

}

