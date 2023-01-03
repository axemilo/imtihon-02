import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express'
import { Router } from 'express'
import { PORT } from './config.js'

const router = Router()

const swaggerDocs = swaggerJSDoc({
  swaggerDefinition: {
    openapi: '3.0.0',
    servers: [
      {
        url: `https://localhost:${PORT}`,
        description: 'Imtihon API local server',
        port: {
          enum: [PORT],
          default: PORT,
        },
      },
    ],
    info: {
      version: '1.0.0',
      title: 'Imtihon API',
      description: 'Hard imtihon for everyone, you know',
    },
  },

  apis: [
    `${process.cwd()}/src/swagger/components/*.yaml`,
    `${process.cwd()}/src/swagger/docs/*.yaml`,
  ],
})

router.use('/', swaggerUI.serve, swaggerUI.setup(swaggerDocs))

export default router
