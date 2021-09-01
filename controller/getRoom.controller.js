const pg = require('../models/pg.model');
const user = require('../models/pg.model');

const availableRoom = async (req, res) => {

    let id = req.params.id
    let result = await pg.findById(id)
    if (!result) {
        return res.status(404).json({
            message: "This id is not exist !",
            status: 404
        })
    }

    try {
        let pgName = result.pgName;
        console.log(pgName)
        let rooms = result.rooms
        let room = await user.find({ pgName: pgName }).countDocuments();
        console.log(room)
        console.log(rooms)
        if(rooms>=room){
            let a = rooms-room
            console.log(a)
            return res.status(200).json({
                message : `In this pg ${a} room empty`,
                status : 200
            })
        }

    }
    catch {
        return res.status(500).json({
            message: '500 Internal server Error ',
            status: 500
        })
    }
}

module.exports = { availableRoom }