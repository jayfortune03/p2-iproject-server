const { User, Sickness } = require(`../models`)

class SicknessController {
    static getSickness(req, res, next) {
        User.findOne({
            where: {id: 3},
            include: {
                model: Sickness
            }
        })
        .then(data => {
            res.status(200).json(data)
        })

        .catch(err => {
            console.log(err)
        })
    }

    static postSickness(req, res, next) {
        Sickness.create({
            name:`testinDASFSDFSDg`,
            profName:`ite`,
            icdName:`ihihi`,
            accuracy:12,
            ranking:2,
            specialisation:`obat doketer`,
            UserId: 3
        })
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err => {
            console.log(err)
        })
    }
}

module.exports = SicknessController