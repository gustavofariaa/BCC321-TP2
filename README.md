# Trabalho Prático - Banco de Dados I - BCC321

<table>
  <tr>
    <td align="center"><a href="https://www.linkedin.com/in/ana-cristina-lopes-b69610167/"><img src="https://avatars.githubusercontent.com/u/42918211" width="100px;" alt=""/><br /><sub><b>Ana Cristina</b></sub></a><br /></td>
    <td align="center"><a href="https://www.linkedin.com/in/gustavo-barbosa-39829819b/"><img src="https://avatars.githubusercontent.com/u/60071133" width="100px;" alt=""/><br /><sub><b>Gustavo Barbosa</b></sub></a><br /></td>
    <td align="center"><a href="https://www.linkedin.com/in/gustavofariaa/"><img src="https://avatars.githubusercontent.com/u/35354850" width="100px;" alt=""/><br /><sub><b>Gustavo Amorim</b></sub></a><br /></td>
    <td align="center"><a href="https://www.linkedin.com/in/mateuss-oliveira/"><img src="https://avatars.githubusercontent.com/u/72620226" width="100px;" alt=""/><br /><sub><b>Mateus Oliveira</b></sub></a><br /></td>
    <td align="center"><a href="https://www.linkedin.com/in/sawtorugo/"><img src="https://avatars.githubusercontent.com/u/82059353" width="100px;" alt=""/><br /><sub><b>Vitor Hugo</b></sub></a><br /></td>
    </tr>
</table>

## Banco de Dados
Dado um problema fictício de controle interno de uma loja física de venda de roupas, sapatos e acessórios, o grupo implementou um sistema capaz de gerenciar produtos e funcionários, além de manter históricos de compras, estoque e fornecedores. 

### Concepção
Foram levantados requisitos necessários ao sistema e cridas as histórias dos usuários. A partir das informações coletadas, foram definidos os dados necessários para construção do banco de dados.

### Diagrama Entidade Relacionamento Estendido
A partir dos dados levantados, foram aplicados os conceitos de Modelagem Entidade Relacionamento Estendido para gerar o Diagrama ERE.
![Diagrama ERE](.github/diagramaere.png)

### Mapeamento para Esquema Relacional
Com o Diagrama ERE formulado, foram aplicadas as regras de Mapeamento para Esquema Relacional, obtendo então o Esquema Lógico.

### Geração do Script SQL
A partir do Esquema Lógico foi possível codificar o script SQL, respeitando as regras da linguagem, para gerar e popular o banco de dados.

## Infraestrutura
A fim de deixar o banco de dados disponível de forma remota, ele foi implantado na plataforma Google Cloud.

### Criação de uma instância de VM
![](.github/img1.png)
![](.github/img2.png)
![](.github/img3.png)
![](.github/img4.png)
![](.github/img5.png)
![](.github/img6.png)
![](.github/img7.png)
![](.github/img8.png)

### Conexão com Banco de Dados Remoto
Para administrar o banco de dados foi utilizado o [DBeaver](https://dbeaver.io/) que é um aplicativo de software cliente SQL.
![](.github/img9.png)
![](.github/img10.png)

### Execução do Script SQL
![](.github/img11.png)

## Implementação do Sistema
A implementação do sistema web utilizou as seguintes tecnologias: 
- [Next.js](https://nextjs.org/)
- [ReactJS](https://reactjs.org/)
- [UIkit](https://getuikit.com/)
- [node-postgres](https://www.npmjs.com/package/pg)

### Criação da API Rest
A API Rest utiliza o protocolo de comunicação HTTP utilizando os métodos GET, POST, PUT e DELETE. Em nosso sistema utilizaremos os métodos nas seguintes rotas:
- Retornar todos os produtos
    ```
    GET api/products
    ```
- Retornar um produto específico
    ```
    GET api/products/:id
    ```
- Editar um produto específico
    ```
    PUT api/products/:id
    ```
- Retornar todos os produtos de um determinado gênero
    ```
    GET api/products/filters/gender/:value
    ```
- Retornar todos os produtos de um determinado tamanho
    ```
    GET api/products/filters/size/:value
    ```
- Retornar todos os produtos de um determinado tipo
    ```
    GET api/products/filters/type/:value
    ```

### Deploy do Sistema


## Artefatos
- [Mapeamento ERE para Relacional](.artifacts/mapeamentoRelacional.txt)
- [Script SQL](.artifacts/script.sql)
