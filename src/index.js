const express = require('express')
const router = require('./route/index.js')
const { loggingMiddleware } = require('./middleware/index.js')
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express()


const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
      title: 'Auth, Users, and Movie API Docs',
      version: '1.0.0',
      description:
        'This is a documentation for auth, User and Movie API.',
    },
    servers: [
      {
        description: 'Development server',
      },
    ],
  };

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./docs/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


const port = 8000
app.use(express.json())

app.use(loggingMiddleware)
app.use(router)
app.listen(port, () => {
    console.log("aplikasi berjalan di port: " + port)
})