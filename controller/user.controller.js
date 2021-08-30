const user = require('../models/user.model');
const pg = require("../models/pg.model");
const joi = require("joi");

const bookingPg = async (req, res) => {

    const Schema = joi.object({
        userName: joi.string().required(),
        pgName: joi.string().required(),
        address: joi.string().required(),
        phoneNo: joi.number().required()
    })

    let validateSchema = Schema.validate(req.body);

    if (validateSchema.error) {
        return res.status(404).json({
            message: validateSchema.error || "Bad Request",
            status: 404
        })
    } else {
        validateSchema = validateSchema.value;
    }
    let { userName, pgName, address, phoneNo } = req.body

    let payload = {
        userName,
        pgName,
        address,
        phoneNo
    }

    let result = await pg.findOne({ "pgName": pgName })
    if (!result) {
        return res.status(404).json({
            message: "this pg is not available !",
            status: 404
        })
    }
    let room = result.rooms
    let pgBookRoom = await user.find({ pgName: pgName }).countDocuments();

    try {
        if (room >= pgBookRoom) {
            let result = await user.create(payload);
            return res.status(200).json({
                message: "booking successfull",
                status: 200
            })
        }

        return res.json({
            message: "this pg is already full ,book another one!"
        })
    }
    catch {
        return res.status(500).json({
            message: "500 Internal server error !",
            status: 500
        })
    }

}

const livigUsers = async (req, res) => {

    let id = req.params.id
    let result = await pg.findById(id)

    if (!result) {
        return res.status(404).json({
            message: "this pg is not available !",
            status: 404
        })
    }
    let pgName = result.pgName
    try {
        let result = await user.find({ pgName: pgName }).countDocuments();
        return res.status(200).json({
            message : `${result} users living in this pg`
        })

    }
    catch {
        return res.status(500).json({
            message: "500 Internal server error !",
            status: 500
        })
    }

}

module.exports = { bookingPg, livigUsers }