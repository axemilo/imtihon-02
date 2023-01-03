import { Router } from 'express'
import postsController from '../controllers/posts.controller.js'

const router = Router()

router.get('/posts', postsController.GET)

router.post('/posts', postsController.POST)
router.get('/posts/:id', postsController.FIND)
export default router
