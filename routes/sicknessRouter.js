const router = require(`express`).Router()
const SicknessController = require(`../controllers/userController`)
// const {errorHandler} = require(`../middlewares/errorHandler`)
// const { authentication } = require(`../middlewares/authentication`)

router.get(`/`, SicknessController.getSickness)

module.exports = router