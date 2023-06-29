import {Router } from "express"
import controllers from "../controllers/vehiculeControllers.js"
const router = Router()


router.get('/', controllers.geVehicule)
router.post('/', controllers.addVehicule)
router.put('/:id', controllers.updateUser)
router.delete('/:id', controllers.geVehicule)

export default router