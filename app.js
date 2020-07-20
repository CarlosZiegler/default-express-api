require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const app = express();
const Cors = require('cors');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const dbConnection = require('./configs/db.config');
const routes = require('./routes')

require('./auth/auth');

const connectToMongo = async () => await dbConnection()
connectToMongo();

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Title Project',
            description: 'Description Project',
            contact: {
                name: 'Carlos Ziegler'
            },
            servers: ['http://localhost:3000']
        }
    },
    apis: ["routes.js"]
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)

const DisableTryItOutPlugin = function () {
    return {
        statePlugins: {
            spec: {
                wrapSelectors: {
                    allowTryItOutFor: () => () => false
                }
            }
        }
    }
}

const options = {
    swaggerOptions: {
        plugins: [
            DisableTryItOutPlugin
        ]
    }
};


app.use(Cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs, options))

//Handle errors
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({ error: err });
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server started')
});