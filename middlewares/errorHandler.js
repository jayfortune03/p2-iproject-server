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
    } else if (err === `invalid token`) {
        code = 401
        message = `You are unauthorized`
    } else if (err === `jwt must be provided`) {
        code = 401
        message = `Invalid token!`
    }  else if (err === `null value in column "name" violates not-null constraint`) {
        code = 400
        message = `Name cannot be null`
    } else if (err === `null value in column "profName" violates not-null constraint`) {
        code = 400
        message = `profName cannot be null`
    } else if (err === `null value in column "icdName" violates not-null constraint`) {
        code = 400
        message = `icdName cannot be null`
    } else if (err === `null value in column "accuracy" violates not-null constraint`) {
        code = 400
        message = `Accuracy cannot be null`
    } else if (err === `null value in column "ranking" violates not-null constraint`) {
        code = 400
        message = `Ranking cannot be null`
    } else if (err === `null value in column "specialisation" violates not-null constraint`) {
        code = 400
        message = `Specialisation cannot be null`
    } else {
        message = `Internal server error`
        code = 500
    }

    res.status(code).json({message})
}


module.exports = {errorHandler}