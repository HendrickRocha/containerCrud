import db from '../db.js'

export const getReport = (_,res)=>{
    const q = "SELECT * FROM container INNER JOIN move ON container.containerNum = move.containerNum"

    db.query(q,(err,data)=>{
        if(err)return console.log(err)

        return res.status(200).json(data)
    })
}