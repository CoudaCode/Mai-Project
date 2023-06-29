import {Router} from "express"
import Reversation from "../controllers/ReversationControllers.js"
const router = Router()
// router.get("/", (req, res) => {
//   res.setHeader("Access-Control-Allow-Origin", "*") 
//    });

router.get('/', Reversation.getReservation)
router.get('/ville', Reversation.Destination)
router.post('/', Reversation.createReservation)

export default router