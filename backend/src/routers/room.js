import { Router } from 'express'
import { create, list, getOne, remove, update, getMessageOnRoom } from '../controllers/room'
const router = Router()


router.post('/room', create)
router.get('/room', list)
router.get('/room/:id', getMessageOnRoom)
router.put('/room/:id', update)
router.delete('/room/:id', remove)


export default router