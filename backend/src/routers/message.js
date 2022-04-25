import { Router } from 'express'
import { create, list, getOne, remove, update } from '../controllers/message'
const router = Router()


router.post('/message', create)
router.get('/message', list)
router.get('/message/:id', getOne)
router.put('/message/:id', update)
router.delete('/message/:id', remove)


export default router