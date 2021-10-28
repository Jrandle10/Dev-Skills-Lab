import { Router } from 'express'
// import the skillDb function from the controller
import * as skillsCtrl from '../controllers/skills.js'
const router = Router()

/* GET users listing. */

router.get('/', skillsCtrl.index)
router.get('/new', skillsCtrl.new)
router.get('/:id', skillsCtrl.show)
router.post('/', skillsCtrl.create)
router.delete('/:id', skillsCtrl.delete)

export {
  router
}
