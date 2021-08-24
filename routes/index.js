const router = require(`express`).Router()
const sickness = require(`./sicknessRouter`)
const user = require(`./userRouter`)

router.use(`/`, user)
router.use(`/`, sickness)

module.exports = router