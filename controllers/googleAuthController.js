const { OAuth2Client } = require(`google-auth-library`)
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)
const { User } = require(`../models`)
const { signToken } = require(`../helpers/jwt`)

class GoogleController {
    static async googleAuth(req, res, next) {
        try {
            const ticket = await client.verifyIdToken({
                idToken: req.body.idToken,
                audience: process.env.GOOGLE_CLIENT_ID
            })
            let payload = ticket.getPayload()

            const [user, created] = await User.findOrCreate({
                where : { email: payload.email },
                defaults : {
                    email: payload.email,
                    firstName: payload.given_name,
                    lastName: payload.family_name,
                    dateOfBirth: `2000-01-01`,
                    gender: `Unknown`,
                    password: payload.email
                }
            })
            const access_token = signToken({id : user.id, email: user.email, role: user.role})
            res.status(201).json({access_token})

        } catch(err) {
            // next(err)
            console.log(err)
        }
    }
}


module.exports = GoogleController