const user = require("../models/user.model");

const AllUsers = async (req, res) => {

    try {
        let result = await user.find({}).count();
        return res.status(200).json({
            message: `Total ${result} users are living in all pgs !`,
            status: 200
        })
    }
    catch{
        return res.status(500).json({
            message : "500 Internal  Server Error!",
            status : 500
        })
    }

}

module.exports = { AllUsers }