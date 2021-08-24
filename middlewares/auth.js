const{ User } = require(`../models`)
const { verifyToken } = require(`../helpers/jwt`)

 async function authentication(req, res, next) {
    try {
        const { access_token } = req.headers
        const payload = verifyToken(access_token)
        const user = await User.findByPk(payload.id)
        if (user) {
            req.user = {
                id : payload.id,
                email: payload.email
            }
            next()
        } else {
            throw ({message: `Unauthorized!`})
        }
    } catch(err) {
        next(err.message)
    }
}

module.exports = {authentication}