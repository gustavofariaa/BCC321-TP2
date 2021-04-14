// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDB from '../../../../../services/connectDB'

export default (req, res) => {  
    try{
        const {value} = req.query;
        connectDB.connect(async (error, client, release)=>{
            const {rows} = await client.query(`
            SELECT peca.codigo, peca.cor, peca.tamanho, peca.imagem, peca.valor_atual, produto.nome, produto.descricao
            FROM peca JOIN produto ON (peca.produto_codigo=produto.codigo)
            WHERE tipo='${value}'
            `)
            const obj = rows?.map?.(row => row.tipo)
            const types = [... new Set(obj)];
            res.status(200).json(JSON.stringify(types));
        });
    } catch(err){res.status(500)}  
}