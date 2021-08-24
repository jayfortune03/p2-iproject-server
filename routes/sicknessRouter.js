const router = require(`express`).Router()
const SicknessController = require(`../controllers/sicknessController`)
const {errorHandler} = require(`../middlewares/errorHandler`)
const { authentication } = require(`../middlewares/auth`)

router.use(authentication)
router.get(`/user/sickness`, SicknessController.getSickness)
router.post(`/user/sickness`, SicknessController.postSickness)
router.use(errorHandler)

module.exports = router