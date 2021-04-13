// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDB from '../../../services/connectDB'

export default (req, res) => {  
    try{
        connectDB.connect(async (error, client, release)=>{
            const {rows} = await client.query(`SELECT peca.codigo, cor, tamanho, imagem FROM peca`);
            res.status(200).json(JSON.stringify(rows));
        });
    } catch(err){res.status(500)}  
}
