// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDB from '../../../../../services/connectDB'

export default (req, res) => {  
    try{
        connectDB.connect(async (error, client, release)=>{
            const {rows} = await client.query(`SELECT tipo FROM produto;`)
            const obj = rows?.map?.(row => row.tipo)
            const types = [... new Set(obj)];
            res.status(200).json(JSON.stringify(types));
        });
    } catch(err){res.status(500)}  
}
