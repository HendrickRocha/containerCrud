import db from '../db.js'

export const getContainer = (_,res)=>{
    const q = "SELECT * FROM container ORDER BY clientName"

    db.query(q,(err,data)=>{
        if(err)return console.log(err)

        return res.status(200).json(data)
    })
}

export const postContainer = (req, res)=>{
    const q = "INSERT INTO container (clientName, containerNum, containerType, containerStatus, containerCat) VALUES(?)"

    const values = [
        req.body.clientName,
        req.body.containerNum,
        req.body.containerType,
        req.body.containerStatus,
        req.body.containerCat
    ]

    db.query(q, [values],(err)=>{
        if(err)return console.log(err)

        return res.status(200).json('Container cadastrado com sucesso!')
    })
}

export const putContainer = (req, res)=>{
    const q = "UPDATE container SET `clientName`= ?, `containerNum` = ?, `containerType` = ?, `containerStatus` = ?, `containerCat` = ?  WHERE `containerID` = ?"

    const values = [
        req.body.clientName,
        req.body.containerNum,
        req.body.containerType,
        req.body.containerStatus,
        req.body.containerCat
    ]

    db.query(q, [...values, req.params.id],(err)=>{
        if(err)return console.log(err)

        return res.status(200).json('Container atualizado com sucesso!')
    })

}

export const deleteContainer = (req, res)=>{
    const q = 'DELETE FROM container WHERE `containerID` = ?'

    db.query(q, [req.params.id],(err)=>{
        if(err)return console.log(err)

        return res.status(200).json('Container deletado com sucesso!')
    })
}