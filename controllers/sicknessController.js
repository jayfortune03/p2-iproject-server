const { User, Sickness } = require(`../models`)

class SicknessController {
    static getSickness(req, res, next) {
        User.findOne({
            where: {id: req.user.id},
            include: {
                model: Sickness
            },
            attributes : {
                exclude: [`password`]
            }
        })
        .then(data => {
            res.status(200).json(data)
        })

        .catch(err => {
            next(err.message)
        })
    }

    static postSickness(req, res, next) {
        const { 
            name, 
            profName, 
            icdName, 
            accuracy, 
            ranking, 
            specialisation 
        } = req.body
        Sicknfess.create({
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