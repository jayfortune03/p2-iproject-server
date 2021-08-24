const router = require(`express`).Router()
const sickness = require(`./sicknessRouter`)
const user = require(`./userRouter`)
const googleAuth = require(`./googleRouter`)

router.use(`/`, user)
router.use(`/`, googleAuth)
router.use(`/`, sickness)

module.exports = router