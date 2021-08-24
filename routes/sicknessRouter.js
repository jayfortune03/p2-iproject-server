const router = require(`express`).Router()
const SicknessController = require(`../controllers/sicknessController`)
const {errorHandler} = require(`../middlewares/errorHandler`)
// const { authentication } = require(`../middlewares/authentication`)

router.post(`/user/sickness`, SicknessController.postSickness)
router.use(errorHandler)

module.exports = router