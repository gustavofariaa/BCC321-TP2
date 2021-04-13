// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDB from '../../../services/connectDB'

export default (req, res) => {

    if(req.method === 'GET'){
        try{
            const {pid} = req.query;
            console.log(pid);
            connectDB.connect(async (error, client, release)=>{
                const {rows} = await client.query(`
                SELECT *
                FROM peca JOIN produto ON (peca.produto_codigo=produto.codigo)
                WHERE peca.codigo='${pid}'
                `)
                res.status(200).json(JSON.stringify(rows));
            });
        } catch(err){res.status(500)}
    }

    if(req.method === 'PUT'){
        try{
            const {pid, cor, tamanho, imagem} = req.query;
            console.log(pid);
            connectDB.connect(async (error, client, release)=>{
                const {rows} = await client.query(`
                UPDATE peca
                SET cor = '${cor}', tamanho = '${tamanho}', imagem = '${imagem}'
                WHERE codigo = '${pid}';                
                `)
                res.status(200).json(JSON.stringify(rows));
            });
        } catch(err){res.status(500)}
    }
}