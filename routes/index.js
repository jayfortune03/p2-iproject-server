const router = require(`express`).Router()
const sickness = require(`./sicknessRouter`)
const user = require(`./userRouter`)
const symptom = require(`./symptomRouter`)

router.use(`/`, user)
router.use(`/`, sickness)
router.use(`/`, symptom)

module.exports = router