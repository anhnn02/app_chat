import { Router } from 'express'
import { register, login, list, getOne, remove, update } from '../controllers/user'
const router = Router()


router.post('/register', register)
router.post('/login', login)
router.get('/user', list)
router.get('/user/:id', getOne)
router.put('/user/:id', update)
router.delete('/user/:id', remove)


export default router