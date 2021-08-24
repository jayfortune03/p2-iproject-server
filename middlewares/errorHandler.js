function errorHandler(err, req, res, next) {
    let code, message
    console.log(err, `INI DI HANDLER`);

    if (err === `null value in column "firstName" violates not-null constraint`) {
        code = 400
        message = `First Name cannot be Null!`
    } else if (err === `null value in column "gender" violates not-null constraint`) {
        code = 400
        message = `Gender cannot be Null!`
    } else if (err === `null value in column "dateOfBirth" violates not-null constraint`) {
        code = 400
        message = `Date of Birth cannot be Null!`
    } else if (err === `null value in column "email" violates not-null constraint`) {
        code = 400
        message = `Email cannot be Null!`
    } else if (err === `Illegal arguments: undefined, string`) {
        code = 400
        message = `Password cannot be Null!`
    } else if (err === `Validation error`) {
        code = 400
        message = `That email has already taken`
    } else if (err === `Invalid Username or Email or Password!`) {
        code = 400
        message = err
    } else if (err === `WHERE parameter "email" has invalid "undefined" value`) {
        code = 400
        message = `Email cannot be null`
    } else if (err.errors) {
        message = err.errors.map(el => {
            return el.message
        })
        code = 400
    } else {
        message = `Internal server error`
        code = 500
    }

    res.status(code).json({message})
}


module.exports = {errorHandler}