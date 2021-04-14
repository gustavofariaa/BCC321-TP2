// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDB from '../../../services/connectDB'

export default (req, res) => {

    if (req.method === 'GET') {
        try {
            const {pid} = req.query;
            connectDB.connect(async (error, client, release) => {
                const {rows} = await client.query(`
                SELECT *
                FROM peca JOIN produto ON (peca.produto_codigo=produto.codigo)
                WHERE peca.codigo='${pid}'
                `)
                res.status(200).json(JSON.stringify(rows));
            });
        } catch (err) {
            res.status(500)
        }
    }

    if (req.method === 'PUT') {
        try {
            const {pid, cor, tamanho, imagem, nome, descricao, valor_atual} = req.query;
            connectDB.connect(async (error, client, release) => {
                const {rows} = await client.query(`

                BEGIN TRANSACTION;
                UPDATE peca
                SET cor = '${cor}', tamanho = '${tamanho}', imagem = '${imagem}', valor_atual = '${valor_atual}'
                WHERE codigo = '${pid}';

                UPDATE produto
                SET nome = '${nome}', descricao = '${descricao}'
                WHERE codigo IN (SELECT produto_codigo
                FROM peca
                WHERE peca.codigo = '${pid}');
                COMMIT;

                `)
                res.status(200).json(JSON.stringify(rows));
            });
        } catch (err) {
            res.status(500)
        }
    }
}