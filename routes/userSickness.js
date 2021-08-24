const router = require(`express`).Router()
const UserController = require(`../controllers/userController.js`)
// const {errorHandler} = require(`../middlewares/errorHandler`)


router.get(`/sickness`, UserController.getSickness)
// router.use(errorHandler)

module.exports = router
