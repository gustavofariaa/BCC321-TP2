// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDB from '../../../../../services/connectDB'

export default (req, res) => {  
    try{
        const {pid} = req.query;
        console.log(pid);
        connectDB.connect(async (error, client, release)=>{
            const {rows} = await client.query(`
            SELECT peca.codigo, peca.cor, peca.tamanho, peca.imagem, peca.valor_atual, produto.nome, produto.descricao
            FROM peca JOIN produto ON (peca.produto_codigo=produto.codigo)
            WHERE genero='${pid}'
            `)
            res.status(200).json(JSON.stringify(rows));
        });
    } catch(err){res.status(500)}  
}
