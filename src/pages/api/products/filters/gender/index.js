// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDB from '../../../../../services/connectDB'

export default (req, res) => {  
    try{
        connectDB.connect(async (error, client, release)=>{
            const {rows} = await client.query(`SELECT genero FROM produto;`)
            const obj = rows?.map?.(row => row.genero)
            const genders = [... new Set(obj)];
            res.status(200).json(JSON.stringify(genders));
        });
    } catch(err){res.status(500)}  
}
