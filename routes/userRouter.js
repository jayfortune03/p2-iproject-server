const router = require(`express`).Router()
const UserController = require(`../controllers/userController.js`)
// const {errorHandler} = require(`../middlewares/errorHandler`)

router.post(`/auth/google`, UserController.googleAuth)
// router.post(`/customer/auth/google`, GoogleController.googleAuthCustomer)
// router.use(errorHandler)

module.exports = router
