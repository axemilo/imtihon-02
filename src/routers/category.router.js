import { Router } from 'express'
import categoryController from '../controllers/category.controller.js'

const router = Router()

router.get('/category', categoryController.GET)

export default router
