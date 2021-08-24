const router = require(`express`).Router()
const SymptomController = require(`../controllers/symptomController`)
// const {errorHandler} = require(`../middlewares/errorHandler`)

router.get(`/symptoms`, SymptomController.getSymptoms)
router.post(`/symptoms`, SymptomController.postSymptoms)

module.exports = router