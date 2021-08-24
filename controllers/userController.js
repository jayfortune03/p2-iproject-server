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
            console.log(err)
            // if (err.errors[0].message === `Password must be more than 5 characters!`) {
            //     next(err.errors[0].message)
            // } else if (err.errors[0].message === `Email must be in email format!`) {
            //     next(err.errors[0].message)
            // } else {
            //     next(err.name)
            // }
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
                    throw ({name : `Invalid Username or Email or Password!`})
                }
            } else {
                throw ({name : `Invalid Username or Email or Password!`})
            }
        })
        .catch(err => {
            next(err.name)
        })
    }

    static postSickness(req, res, next) {
        Sickness.create({

        })
    }

    static getSicknessHistory(req, res, next) {
        User.findOne({
            where: {id: 3},
            include: {
                model: Sickness
            },
            attributes: {
                exclude: [`password`, `updatedAt`]
            }
        })
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            // res.status(500).json(err)
            console.log(err)
        })
    }
}

module.exports = UserController