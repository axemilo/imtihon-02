import express from 'express'
import fileUpload from 'express-fileupload'
import ejs from 'ejs'
import path from 'path'
import { PORT } from './config.js'

import postsRouter from './routers/posts.router.js'
import adminRouter from './routers/admin.router.js'
import categoryRouter from './routers/category.router.js'
import swaggerRouter from './swagger.js'

const app = express()
app.use(express.json())
app.use(fileUpload())

app.use(postsRouter)
app.use(adminRouter)
app.use(categoryRouter)

app.use('/api-docs', swaggerRouter)

app.engine('html', ejs.renderFile)
app.set('view engine', 'html')
app.set('views', path.resolve('src', 'views'))
app.use(express.static(path.resolve('src', 'public')))
app.use(express.static(path.resolve('uploads')))

app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.get('/create', (req, res) => {
  res.render('posts.ejs')
})

app.get('/login', (req, res) => {
  res.render('admin.ejs')
})

app.listen(PORT, () => console.log('server at 5000*'))
