import {Router} from "express"
import {userVerification} from "../middlewares/UsersMiddlwares.js"
import controllers from "../controllers/Usercontrollers.js"
const router = Router()
// router.get("/", (req, res) => {
//   res.setHeader("Access-Control-Allow-Origin", "*") 
//    });

router.post('/',userVerification)
router.get('/users', controllers.getUsers)
router.post('/addUser', controllers.createUser)
router.post('/Login', controllers.Login)
router.get('/users/:id', controllers.getUsersByid)
router.put('/users/:id', controllers.updateUser)
router.delete('/users/:id', controllers.deleteUser)


export default router