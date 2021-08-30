const pg = require('../models/pg.model');
const joi = require("joi");

const get = async (req, res) => {

    let Schema = joi.object({
        limit: joi.number().optional().default(20),
        skip: joi.number().optional().default(0)
    })

    let validateSchema = Schema.validate(req.body);
    if (validateSchema.error) {
        return res.status(400).json({
            message: "bad request "
        })
    } else {
        validateSchema = validateSchema.value
    }

    try {
        let result = await pg.find({}, { "__v": 0 });
        return res.status(200).json({
            message: "these all pg available !",
            result: result,
            status: 200
        })
    }
    catch {
        return res.status(500).json({
            message: 'Internal server Error ',
            status: 500
        })
    }


}

const getById = async (req, res) => {

    let id = req.params.id
    let result = await pg.findById(id)
    // console.log(result)
    if (!result) {
        return res.status(404).json({
            message: "Doesn't exist this pg .",
            status: 404
        })
    }

    try {
        let result = await pg.findById(id, { "__v": 0 })
        return res.status(201).json({
            data: result,
            status: 200
        })
    }
    catch{
        return res.status(500).json({
            message : "Internal server Error !",
            status : 500
        })
    }
}

module.exports = { get, getById}