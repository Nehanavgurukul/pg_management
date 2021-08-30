const pg = require("../models/pg.model");
const joi = require("joi");

const pg_post = async (req, res) => {
    
    const Schema = joi.object({
        role : joi.string().default('admin'),
        pgName : joi.string().required(),
        rooms : joi.number().default(8),
        address : joi.string().required(),
        rent : joi.number().default(20000),
        document : joi.string().default(''),
        status : joi.string().default('empty'),
    })

    let schemaValidator = Schema.validate(req.body);
    if (schemaValidator.error) {
        return res.status(400).json({
            message: schemaValidator.error.message || "Bad Request",
            code: 400
        })
    } else {
        schemaValidator = schemaValidator.value;
    }

    let {role, pgName, rooms, address, rent, document, status} = req.body;

    let payload = {
        role,
        pgName,
        rooms,
        address,
        rent,
        document,
        status
    }
    let result = await pg.findOne({pgName : pgName});
    if(result){
        return res.status(409).send({
            message : 'this pg already exist !'
        });
    }
    try{
        let result = await pg.create(payload);
        return res.status(200).send({
            message : 'created one more new pg'
        });
    }catch{
        return res.status(500).send({
            message : 'Internal server Error!',
            status : 500
        });
    }
}



const delete_pg = async(req, res) => {
    let id = req.params.id
    const result = await pg.findById(id)
    if(!result){
        res.status(404).json({
            message : "this pg is not available !",
            status : 404
        })
    }
    try{
        const result = await pg.findByIdAndDelete(id)
        res.status(200).json({
            message : "deleted !"
        })
    }
    catch{
        res.status(500).json({
            message : "Internal server Error !",
            status : 500
        })
    }
}

module.exports = {pg_post , delete_pg}