require(`dotenv`).config()
const axios = require("axios")
const { Symptom, SymptomDummy } = require(`../models`)

class SymptomController {
    static postSymptoms(req, res, next) {
        axios({
            method: `GET`,
            url: `https://sandbox-healthservice.priaid.ch/symptoms`,
            params: {
                token: process.env.API_MEDIC_TOKEN,
                format: `json`,
                language: `en-gb`
            }
        })
        .then(({data}) => {
            // console.log(data)
            data.forEach(el => {
                return SymptomDummy.create({
                    name:el.Name
                })
            });
        })
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    static getSymptoms(req, res, next) {
        SymptomDummy.findAll({
            oerder: [[`id`, `ASC`]]
        })
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            console.log(err)
        })
    }
}

// console.log(data)

module.exports = SymptomController