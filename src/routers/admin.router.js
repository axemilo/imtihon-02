import { Router } from 'express'
import adminController from '../controllers/admin.controller.js'
import checkToken from '../middlewares/checkToken.js'

const router = Router()

router.post('/login', adminController.LOGIN)
router.post('/signup', adminController.REGISTER)

export default router
