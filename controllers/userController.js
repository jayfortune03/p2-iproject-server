const { User, Sickness } = require(`../models`)
const { checkPassword } = require(`../helpers/bcrypt`)
const { signToken } = require(`../helpers/jwt`)

class UserController {
    static register(req, res, next) {
        const { email, password, firstName, lastName, gender, dateOfBirth } = req.body
        User.create({
            firstName,
            lastName,
            gender,
            dateOfBirth,
            email,
            password
        })
        .then(data => {
            res.status(201).json({id : data.id, email: data.email})
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

    static login(req, res, next) {
        const { email, password } = req.body
        User.findOne({
            where : { email }
        })
        .then(data => {
            if (data) {
                if (checkPassword(password, data.password)) {
                    const access_token = signToken({id : data.id, email: data.email, role: data.role})
                    res.status(200).json({access_token})
                } else {
                    throw ({message : `Invalid Username or Email or Password!`})
                }
            } else {
                throw ({message : `Invalid Username or Email or Password!`})
            }
        })
        .catch(err => {
            next(err.message)
        })
    }

    static getUserData(req, res, next) {
        User.findOne({
            where: {id: req.user.id},
            attributes: {
                exclude: [`password`]
            },
            include: {model: Sickness}
        })
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            next(err.message)
        })
    }
}

module.exports = UserController