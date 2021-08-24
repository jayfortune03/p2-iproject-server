const router = require(`express`).Router()
const UserController = require(`../controllers/userController.js`)
const SicknessController = require(`../controllers/sicknessController`)
const GoogleController = require(`../controllers/googleAuthController`)
const {errorHandler} = require(`../middlewares/errorHandler`)

router.post(`/register`, UserController.register)
router.post(`/login`, UserController.login)
router.post(`/auth/google`, GoogleController.googleAuth)
router.get(`/user/sickness`, SicknessController.getSickness)
router.use(errorHandler)

module.exports = router
