const bcrypt = require(`bcryptjs`)
const salt = bcrypt.genSaltSync(10);

function hashPassword(password) {
    return bcrypt.hashSync(password, salt)
}

function checkPassword(password, hashedPassword) {
    return bcrypt.compareSync(password, hashedPassword)
}


module.exports = {
    hashPassword,
    checkPassword
}