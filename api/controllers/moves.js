import db from '../db.js'

export const getMove = (_,res)=>{
    const q = "SELECT * FROM move ORDER BY containerNum"

    db.query(q,(err,data)=>{
        if(err)return console.log(err)

        return res.status(200).json(data)
    })
}

export const postMove = (req, res)=>{
    const q = "INSERT INTO move (moveType, dateStart, hourStart, dateEnd, hourEnd, containerNum) VALUES(?)"

    const verify = 'SELECT * FROM container WHERE containerNum = ?'

    const values = [
        req.body.moveType,
        req.body.dateStart,
        req.body.hourStart,
        req.body.dateEnd,
        req.body.hourEnd,
        req.body.containerNum
    ]

    db.query(verify, values[5],(err,data)=>{
        if(err)return console.log(err)

        if(data.length>0){
            db.query(q,[values],(err)=>{
                if(err)return console.log(err)

                return res.status(200).json('Movimentação cadastrada com sucesso')
            })
        }
    })
}

export const putMove = (req, res)=>{
    const q = "UPDATE move SET `moveType`= ?, `dateStart` = ?, `hourStart` = ?, `dateEnd` = ?, `hourEnd` = ?, `containerNum` = ?  WHERE `moveID` = ?"

    const values = [
        req.body.moveType,
        req.body.dateStart,
        req.body.hourStart,
        req.body.dateEnd,
        req.body.hourEnd,
        req.body.containerNum
    ]

    db.query(q, [...values, req.params.id],(err)=>{
        if(err)return console.log(err)

        return res.status(200).json('Movimentação atualizada com sucesso!')
    })

}

export const deleteMove = (req, res)=>{
    const q = 'DELETE FROM move WHERE `moveID` = ?'

    db.query(q, [req.params.id],(err)=>{
        if(err)return console.log(err)

        return res.status(200).json('Movimentação deletada com sucesso!')
    })
}