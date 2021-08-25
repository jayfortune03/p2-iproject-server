const router = require(`express`).Router()
const UserController = require(`../controllers/userController.js`)
const GoogleController = require(`../controllers/googleAuthController`)
const {errorHandler} = require(`../middlewares/errorHandler`)
const {authentication} = require(`../middlewares/auth`)

router.post(`/register`, UserController.register)
router.post(`/login`, UserController.login)
router.post(`/auth/google`, GoogleController.googleAuth)
router.use(authentication)
router.get(`/user`, UserController.getUserData)
router.use(errorHandler)

module.exports = router
