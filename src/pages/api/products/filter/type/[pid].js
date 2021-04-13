// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDB from '../../../../../services/connectDB'

export default (req, res) => {  
    try{
        const {pid} = req.query;
        console.log(pid);
        connectDB.connect(async (error, client, release)=>{
            const {rows} = await client.query(`
            SELECT peca.codigo, cor, tamanho, imagem
            FROM peca JOIN produto ON (peca.produto_codigo=produto.codigo)
            WHERE tipo='${pid}'
            `)
            res.status(200).json(JSON.stringify(rows));
        });
    } catch(err){res.status(500)}  
}