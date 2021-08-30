const pg = require("../models/pg.model");

const EmptyPG = async (req, res) => {

    let status = req.query.status
    try {
        let result = await pg.find({ status: status }, { "_id": 1, "pgName": 1 })
        return res.status(200).json({
            message: `these all ${status} pg`,
            result: result
        })
    }
    catch {
        return res.status(500).json({
            message: "Internal server error !",
            status: 500
        })
    }
}

const FullPG = async (req, res) => {

    let status = req.query.status
    try {
        let result = await pg.find({ status: status }, { "_id": 1, "pgName": 1 })
        return res.status(200).json({
            message: `these all ${status}pg`,
            result: result
        })
    }
    catch {
        return res.status(500).json({
            message: "Internal server error !",
            status: 500
        })
    }

}

module.exports = {
    EmptyPG,
    FullPG
}