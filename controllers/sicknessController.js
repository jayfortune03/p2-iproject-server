const { User, Sickness } = require(`../models`)

class SicknessController {
    static postSickness(req, res, next) {
        const { 
            name, 
            profName, 
            icdName, 
            accuracy, 
            ranking, 
            specialisation 
        } = req.body
        Sickness.create({
            name,
            profName,
            icdName,
            accuracy,
            ranking,
            specialisation,
            UserId: req.user.id
        })
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err => {
            if (err.name === `SequelizeValidationError`) {
                next(err)
            } else if (err.name === `SequelizeUniqueConstraintError`) {
                next(err.message)
            } else {
                next(err.message)
            }
        })
    }
}

module.exports = SicknessController