CREATE TABLE Peca (
	Cor VARCHAR(30) NOT NULL,
	Tamanho VARCHAR(5) NOT NULL,
	Codigo NUMERIC NOT NULL,
	Produto_Codigo NUMERIC NOT NULL,
	Imagem TEXT,
	Valor_Atual NUMERIC(5,2) NOT NULL,
	CONSTRAINT pk_peca PRIMARY KEY (Codigo)
);

CREATE TABLE Produto (
	Codigo NUMERIC NOT NULL,
	Genero CHAR NOT NULL,
	Marca VARCHAR(30) NOT NULL,
	Composicao VARCHAR(30) NOT NULL,
	Tipo VARCHAR(30) NOT NULL,
	Grade VARCHAR(30) NOT NULL,
	Departamento_Nome VARCHAR(30) NOT NULL,
	Nome VARCHAR(30) NOT NULL,
	Descricao TEXT NOT NULL,
	CONSTRAINT pk_produto PRIMARY KEY (Codigo)
);

CREATE TABLE Departamento (
	Nome VARCHAR(30) NOT NULL,
	Telefone VARCHAR(15) NOT NULL,
	CONSTRAINT pk_depto PRIMARY KEY (Nome)
);

CREATE TABLE Pedido (
	Frete NUMERIC(5,2) NOT NULL,
	Data TIMESTAMP NOT NULL,
	Codigo NUMERIC NOT NULL,
	Fornecedor_CNPJ VARCHAR(14) NOT NULL,
	CONSTRAINT pk_pedido PRIMARY KEY (Codigo)
);

CREATE TABLE Fornecedor (
	CNPJ VARCHAR(14) NOT NULL,
	E_mail VARCHAR(30) NOT NULL,
	Nome VARCHAR(30) NOT NULL,
	Tipo_de_Produto VARCHAR(30) NOT NULL,
	Razao_Social VARCHAR(30) NOT NULL,
	Endereco VARCHAR(50) NOT NULL,
	Gerente_Funcionario_CPF VARCHAR(11) NOT NULL,
	CONSTRAINT pk_fornecedor PRIMARY KEY (CNPJ)
);

CREATE TABLE TelefonesFornecedor (
	Telefone VARCHAR(15) NOT NULL,
	Fornecedor_CNPJ VARCHAR(14) NOT NULL,
	CONSTRAINT pk_telefones_fornecedor PRIMARY KEY (Fornecedor_CNPJ)
);

CREATE TABLE Compra (
	Codigo NUMERIC NOT NULL,
	Data DATE NOT NULL,
	Forma_de_pagamento VARCHAR(15) NOT NULL,
	Vendedor_Funcionario_CPF VARCHAR(11) NOT NULL,
	Cliente_Identificacao NUMERIC NOT NULL,
	Cumpom_Nome VARCHAR(30) NOT NULL,
	CONSTRAINT pk_compra PRIMARY KEY (Codigo)
);

CREATE TABLE Cupom (
	Nome VARCHAR(30) NOT NULL,
	Tipo_de_desconto VARCHAR(15) NOT NULL,
	Limite_de_usuarios NUMERIC(9) NOT NULL,
	Data_de_validade DATE NOT NULL,
	Valor NUMERIC(5,2) NOT NULL,
	CONSTRAINT pk_cupom PRIMARY KEY (Nome)
);

CREATE TABLE Cliente (
	Identificacao NUMERIC NOT NULL,
	CONSTRAINT pk_cliente PRIMARY KEY (Identificacao)
);

CREATE TABLE Empresa (
	CNPJ VARCHAR(14) NOT NULL,
	Endereco VARCHAR(50) NOT NULL,
	Razao_social VARCHAR(30) NOT NULL,
	Telefone VARCHAR(15) NOT NULL,
	E_mail VARCHAR(30) NOT NULL,
	Cliente_Identificacao NUMERIC NOT NULL,
	CONSTRAINT pk_empresa PRIMARY KEY (CNPJ)
);

CREATE TABLE Pessoa (
	CPF VARCHAR(11) NOT NULL,
	Nome VARCHAR(30) NOT NULL,
	E_mail VARCHAR(30) NOT NULL,
	Cidade VARCHAR(30) NOT NULL,
	CEP VARCHAR(10) NOT NULL,
	Bairro VARCHAR(30) NOT NULL,
	Numero VARCHAR(9) NOT NULL,
	Rua VARCHAR(30) NOT NULL,
	Cliente_Identificacao NUMERIC NOT NULL,
	CONSTRAINT pk_pessoa PRIMARY KEY (CPF)
);

CREATE TABLE TelefonesPessoa (
	Pessoa_CPF VARCHAR(11) NOT NULL,
	Telefone VARCHAR(15) NOT NULL,
	CONSTRAINT pk_telefones_pessoa PRIMARY KEY (Pessoa_CPF, Telefone)
);

CREATE TABLE Funcionario (
	CPF VARCHAR(14) NOT NULL,
	Nome VARCHAR(30) NOT NULL,
	Endereco VARCHAR(30) NOT NULL,
	Salario NUMERIC(5,2) NOT NULL,
	Data_de_nascimento DATE NOT NULL,
	Telefone VARCHAR(15) NOT NULL,
	RG VARCHAR(15) NOT NULL,
	E_mail VARCHAR(30) NOT NULL,
	NIS VARCHAR(30) NOT NULL,
	CONSTRAINT pk_funcionario PRIMARY KEY (CPF)
);

CREATE TABLE Gerente (
	Funcionario_CPF VARCHAR(11) NOT NULL,
	Grau_de_escolaridade VARCHAR(30) NOT NULL,
	CONSTRAINT pk_gerente PRIMARY KEY (Funcionario_CPF)
);

CREATE TABLE GerenteDepartamento (
	Funcionario_CPF VARCHAR(11) NOT NULL,
	Data_Inicio DATE NOT NULL,
	Data_Termino DATE,
	Quantidade NUMERIC(9) NOT NULL,
	Departamento_Nome VARCHAR(30) NOT NULL,
	CONSTRAINT pk_gerente_departamento PRIMARY KEY (Funcionario_CPF)
);

CREATE TABLE Vendedor (
	Funcionario_CPF VARCHAR(11) NOT NULL,
	Comissao NUMERIC(5,2) NOT NULL,
	Departamento_Nome VARCHAR(30) NOT NULL,
	CONSTRAINT pk_vendedor PRIMARY KEY (Funcionario_CPF)
);

CREATE TABLE PecasPedidas (
	Peca_Codigo NUMERIC NOT NULL,
	Pedido_Codigo NUMERIC NOT NULL,
	Quantidade NUMERIC(9) NOT NULL,
	Valor_de_Custo NUMERIC(5,2) NOT NULL,
	CONSTRAINT pk_pecas_pedidas PRIMARY KEY (Peca_Codigo,Pedido_Codigo)
);

CREATE TABLE PecasCompradas (
	Peca_Codigo NUMERIC NOT NULL,
	Compra_Codigo NUMERIC NOT NULL,
	Quantidade NUMERIC(9) NOT NULL,
	Valor_de_Venda NUMERIC(5,2) NOT NULL,
	CONSTRAINT pk_pecas_compradas PRIMARY KEY (Peca_Codigo,Compra_Codigo)
);


ALTER TABLE Peca
ADD CONSTRAINT fk_peca_produto_codigo FOREIGN KEY (Produto_Codigo) REFERENCES Produto (Codigo);

ALTER TABLE Produto
ADD CONSTRAINT fk_produto_departamento_nome FOREIGN KEY (Departamento_Nome) REFERENCES Departamento (Nome);

ALTER TABLE Pedido
ADD CONSTRAINT fk_pedido_fornecedor_cnpj FOREIGN KEY (Fornecedor_CNPJ) REFERENCES Fornecedor (CNPJ);

ALTER TABLE Fornecedor
ADD CONSTRAINT fk_fornecedor_gerente_funcionario_cpf FOREIGN KEY (Gerente_Funcionario_CPF) REFERENCES Gerente (Funcionario_CPF);

ALTER TABLE TelefonesFornecedor
ADD CONSTRAINT fk_tel_fornecedor_cnpj FOREIGN KEY (Fornecedor_CNPJ) REFERENCES Fornecedor (CNPJ)  ON DELETE CASCADE;

ALTER TABLE Compra
ADD CONSTRAINT fk_compra_vendedor_funcionario_cpf FOREIGN KEY (Vendedor_Funcionario_CPF) REFERENCES Vendedor (Funcionario_CPF);

ALTER TABLE Compra
ADD CONSTRAINT fk_compra_cliente_identificacao FOREIGN KEY (Cliente_Identificacao) REFERENCES Cliente (Identificacao);

ALTER TABLE Compra
ADD CONSTRAINT fk_compra_cupom_nome FOREIGN KEY (Cumpom_Nome) REFERENCES Cupom (Nome);

ALTER TABLE Empresa
ADD CONSTRAINT fk_empresa_cliente_identificacao FOREIGN KEY (Cliente_Identificacao) REFERENCES Cliente (Identificacao) ON DELETE CASCADE;

ALTER TABLE Pessoa
ADD CONSTRAINT fk_pessoa_cliente_identificacao FOREIGN KEY (Cliente_Identificacao) REFERENCES Cliente (Identificacao) ON DELETE CASCADE;

ALTER TABLE TelefonesPessoa
ADD CONSTRAINT fk_tel_pessoa_cpf FOREIGN KEY (Pessoa_CPF) REFERENCES Pessoa (CPF) ON DELETE CASCADE;

ALTER TABLE Gerente
ADD CONSTRAINT fk_gerente_funcionario_cpf FOREIGN KEY (Funcionario_CPF) REFERENCES Funcionario (CPF) ON DELETE CASCADE;

ALTER TABLE GerenteDepartamento
ADD CONSTRAINT fk_gerente_departamento_funcionario_cpf FOREIGN KEY (Funcionario_CPF) REFERENCES Funcionario (CPF) ON DELETE CASCADE;

ALTER TABLE GerenteDepartamento
ADD CONSTRAINT fk_gerente_departamento_departamento_nome FOREIGN KEY (Departamento_Nome) REFERENCES Departamento (Nome);

ALTER TABLE Vendedor
ADD CONSTRAINT fk_vendedor_funcionario_cpf FOREIGN KEY (Funcionario_CPF) REFERENCES Funcionario (CPF) ON DELETE CASCADE;

ALTER TABLE Vendedor
ADD CONSTRAINT fk_vendedor_departamento_nome FOREIGN KEY (Departamento_Nome) REFERENCES Departamento (Nome);

ALTER TABLE PecasPedidas
ADD CONSTRAINT fk_pecas_pedidas_peca_codigo FOREIGN KEY (Peca_Codigo) REFERENCES Peca (Codigo);

ALTER TABLE PecasPedidas
ADD CONSTRAINT fk_pecas_pedidas_pedido_codigo FOREIGN KEY (Pedido_Codigo) REFERENCES Pedido (Codigo);

ALTER TABLE PecasCompradas
ADD CONSTRAINT fk_pecas_compradas_peca_codigo FOREIGN KEY (Peca_Codigo) REFERENCES Peca (Codigo);

ALTER TABLE PecasCompradas
ADD CONSTRAINT fk_pecas_compradas_compra_codigo FOREIGN KEY (Compra_Codigo) REFERENCES Compra (Codigo);

INSERT INTO Departamento
VALUES ('Feminino', '3551-1234');
INSERT INTO Departamento
VALUES ('Masculino', '3551-2313');
INSERT INTO Departamento
VALUES ('Sapatos', '3551-1298');
INSERT INTO Departamento
VALUES ('Unissex', '3551-1171');

INSERT INTO Funcionario
VALUES ('12366215310','Rafaela Guimarães','Rua das Flores, 214 - Jardim',5.00,'1987/06/12','(31)93452-6231','14667123','rafag@gmail.com','345789123102');
INSERT INTO Funcionario
VALUES ('56712345670','Jerfeson Silva','Rua Margarida - 231 - Jadim',11.00,'1989/09/10','(31)9523-1234','39678234','jeferson@gmail.com','576812340987');
INSERT INTO Funcionario
VALUES ('12341298756','Maria da Silva','Rua Begônia, 124 - Jardim',10.00,'1994/07/01','(31)99742-6324','34567123','maria@gmail.com','175829472819');
INSERT INTO Funcionario
VALUES ('09823418956','Jose Magalhães','Rua Samambaia, 241 - Jardim',9.00,'1976/04/09','(31)96423-6975','09241746','jose@gmail.com','198743029182');
INSERT INTO Funcionario
VALUES ('28910547829','Enzo Silveira','Rua Suculenta, 19 - Jardim',16.00,'1998/02/01','(31)93473-6572','04518362','enzo@gmail.com','196728563729');
INSERT INTO Funcionario
VALUES ('01278397810','Valentina de Souza','Rua Lírio, 54 - Jardim',18.00,'1988/04/08','(31)96243-8345','18573295','valentina@gmail.com','091546278910');
INSERT INTO Funcionario
VALUES ('10529378930','Beatriz Pereira','Rua Tulipa, 21 - Jardim',200.00,'1967/12/12','(31)92342-4562','27481982','beatriz@gmail.com','209361758391');
INSERT INTO Funcionario
VALUES ('10231482341','Gumercindo Fernandes','Rua Dama da Noite, 74 - Jardim',245.00,'1987/10/05','(31)92345-6342','83693732','gumercindo@gmail.com','037561837461');
INSERT INTO Funcionario
VALUES ('09715312367','Luiz da Costa','Rua Girassol, 227 - Jardim',229.00,'1973/12/09','(31)93423-9342','09734253','luizdacosta@gmail.com','349187653890');


INSERT INTO Vendedor
VALUES ('12366215310',5.00,'Feminino');
INSERT INTO Vendedor
VALUES ('56712345670',5.00,'Masculino');
INSERT INTO Vendedor
VALUES ('12341298756',5.00,'Sapatos');
INSERT INTO Vendedor
VALUES ('09823418956',5.00,'Unissex');


INSERT INTO GerenteDepartamento
VALUES ('28910547829', '2018/04/01','',2500,'Feminino');
INSERT INTO GerenteDepartamento
VALUES ('01278397810', '2018/04/01','',2500,'Masculino');
INSERT INTO GerenteDepartamento
VALUES ('10529378930', '2018/04/01','',2500,'Sapatos');
INSERT INTO GerenteDepartamento
VALUES ('10231482341', '2018/04/01','',2500,'Unissex');


INSERT INTO Gerente
VALUES ('09715312367','Bacharel em Administração');

INSERT INTO Fornecedor
VALUES ('11111111111111','cardoso@gmail.com','Brusinhas e Roupas','Camiseta','Amanda Beatriz Ltda.','Rua Amazonas, 13B - Perólas - Juiz de Fora/MG','09715312367');
INSERT INTO Fornecedor
VALUES ('22222222222222','sergio@gmail.com','Companhia dos Sapatos','Sapato','Sergio Guimarães Ltda.','Rua Amazonas, 13A - Perólas - Juiz de Fora/MG','09715312367');
INSERT INTO Fornecedor
VALUES ('33333333333333','fernandes@gmail.com','Acessórios Fernandes','Acessorio','Lucia Fernandes Ltda.','Rua das Flores, 10 - Jequiti - Parati/RJ','09715312367');

INSERT INTO TelefonesFornecedor
VALUES ('(21)98234-2342','11111111111111');
INSERT INTO TelefonesFornecedor
VALUES ('(21)92324-2142','22222222222222');
INSERT INTO TelefonesFornecedor
VALUES ('(21)93412-1843','33333333333333');


INSERT INTO Cliente
VALUES (1);
INSERT INTO Cliente
VALUES (2);
INSERT INTO Cliente
VALUES (3);
INSERT INTO Cliente
VALUES (4);

INSERT INTO Pessoa
VALUES ('45719389012','Mateus Pereira Souza','mateusps@gmail.com','Ouro Preto/MG','35400000','Bauxita','34','Rua Geraldo Quirino Ribeiro',1);
INSERT INTO Pessoa
VALUES ('23412399889','Geraldina Santina de Jesus','geralds@gmail.com','Mariana/MG','35420000','Jardim dos Inconfidentes','345','Rua Paraná',2);

INSERT INTO TelefonesPessoa
VALUES ('45719389012','(21)92343-2314');
INSERT INTO TelefonesPessoa
VALUES ('45719389012','(11)9231-6514');
INSERT INTO TelefonesPessoa
VALUES ('23412399889','(31)91252-3421');
INSERT INTO TelefonesPessoa
VALUES ('23412399889','(31)95341-1232');


INSERT INTO Empresa
VALUES ('99999999999999','Avenida Souza de Boulos, 35 - Centro - Ouro Preto/MG','Pereirinha Roupas Ltda.','3551-2314','pereirinha@gmail.com',3);
INSERT INTO Empresa
VALUES ('44444444444444','Avenida Tiradentes, 234 - Centro - Ouro Preto/MG','Acessórios Solimões Ltda.','3551-4523','solimoes@gmail.com',4);


INSERT INTO Produto
VALUES (1,'F','Dramatic','Algodão','T-shirt','PP, P, M, G, GG','Feminino','T-shirt Dream','Confeccionada em malha de algodão: Modelagem "Mais Solta ao Corpo" Gola Redonda Mangas Curtas Estampa Frontal. Composição: 100% algodão.');
INSERT INTO Produto
VALUES (2,'F','Couver','Algodão','Oversized shirt tie dye','PP, P, M, G, GG','Feminino','Shirt Couver Max','A Camiseta Colcci Oversized Hard Edition traz uma proposta despojada e moderna para o seu look. Com modelagem ampla, a camiseta Colcci traz estampa da moda.');
INSERT INTO Produto
VALUES (3,'M','Vivara','Algodão','Camisa','PP, P, M, G, GG','Masculino','Camisa Sunset','A polo é uma peça atemporal, podendo ser usada em diversas ocasiões. Essa é uma polo masculina tradicional confeccionada em meia malha premium 100% algodão, com modelagem tradicional e tecido bem leve. Disponível em várias cores e tamanhos.');
INSERT INTO Produto
VALUES (4,'M','Addidas','Algodão','Moletom','PP, P, M, G, GG','Masculino','Moletom Basic','Nossas peças são confecções próprias, usamos tecido composto por 78% algodão e 22% poliéster; O algodão traz a sensação de maciez, conforto e aquecimento; Já o poliéster serve como isolante térmico, garantindo o aquecimento corporal. O poliéster ajuda o moletom a não encolher e o algodão não deixa o tecido dar bolinhas.');
INSERT INTO Produto
VALUES (5,'U','Zara','Algodão','Calça','PP, P, M, G, GG','Unissex','Calça Skinner','Confeccionada em sarja com elastano, de tecido macio e resistente de alta qualidade que modela no corpo e pode ser usada no dia a dia ou em ocasiões especiais. A calça jogger é um modelo tendência, serve como peça coringa do armário, é confortável e pode ser usada de diversas maneiras. Na cintura pode ser ajustada pelo elástico e/ou cordão, e elástico no tornozelo que pode ser usado mais alto ou mais baixo conforme o estilo do consumidor. A calça possui dois bolsos faca na linha do quadril e dois bolsos traseiros chapados.');
INSERT INTO Produto
VALUES (6,'U','Dramatic','Algodão','Conjunto Moletom','PP, P, M, G, GG','Unissex','Moletom Clim','Confeccionada em sarja com elastano, de tecido macio e resistente de alta qualidade que modela no corpo e pode ser usada no dia a dia ou em ocasiões especiais. A calça jogger é um modelo tendência, serve como peça coringa do armário, é confortável e pode ser usada de diversas maneiras. Na cintura pode ser ajustada pelo elástico e/ou cordão, e elástico no tornozelo que pode ser usado mais alto ou mais baixo conforme o estilo do consumidor. A calça possui dois bolsos faca na linha do quadril e dois bolsos traseiros chapados.');
INSERT INTO Produto
VALUES (7,'F','Pergot','Algodão','Colar','PP, P, M, G, GG','Unissex','Colar Iluminium','O Colar Pingente Coraçãozinho Feminino é uma semijoia folheada em ródio branco e cheia de charme. Colar prático e lindo é perfeito para aqueles dias em que você precisa estar bem produzida mas não quer esbanjar com pedras e pérolas. Monte o seu look com vários colares e esteja na moda, combine colares simples, longos e chockers.');
INSERT INTO Produto
VALUES (8,'M','Flury','Algodão','Relógio','PP, P, M, G, GG','Unissex','Relógio Inspire','Relógio Skmei Masculino Digital 1206 : Fique sempre na moda e com estilo todo moderno e elegância, sem perder a esportividade. Ideal para diversas ocasiões, como festas, prática de esporte, passeios e muito mais, o acessório vai complementar seu vestuário e te deixar com um look mais arrojado e sempre antenado. Para um melhor desempenho, dia após dia, você pode acompanhar o seu progresso em tempo real. Assim, você compara suas corridas e compete sempre com seu melhor tempo. Nada mais estimulante do que você mesmo se desafiar e estabelecer suas próprias metas. Este relógio foi projetado para alimentar a sua paixão por esportes.');


INSERT INTO Peca
VALUES ('Preta','M',1,1,'https://i.pinimg.com/564x/84/c9/1a/84c91a602d2d0cc7f896dfba18a6438c.jpg',12.00);
INSERT INTO Peca
VALUES ('Cinza','G',2,2,'https://i.pinimg.com/564x/bb/96/53/bb9653818185a4bf5dd04c2b47f10247.jpg',20.00);
INSERT INTO Peca
VALUES ('Marrom','P',3,3,'https://i.pinimg.com/564x/2b/6f/4d/2b6f4d1f2e85ece02656753aeb69b0f1.jpg',35.00);
INSERT INTO Peca
VALUES ('Branco','PP',4,4,'https://i.pinimg.com/564x/19/09/31/19093193728872deec1e3f8c5c8a3471.jpg',40.00);
INSERT INTO Peca
VALUES ('Cinza','M',5,5,'https://i.pinimg.com/564x/20/f6/96/20f696b8a67df47d4f229d7b33a376a6.jpg',50.00);
INSERT INTO Peca
VALUES ('Verde','M',6,6,'https://i.pinimg.com/564x/4b/a7/32/4ba732edda35ade7fe9da766d051fa5f.jpg',23.55);
INSERT INTO Peca
VALUES ('Dourado','M',7,7,'https://i.pinimg.com/564x/09/06/72/090672ff26814d2f5d128ee78a5b4b53.jpg',100.00);
INSERT INTO Peca
VALUES ('Preto','M',8,8,'https://i.pinimg.com/564x/58/e2/07/58e207b76ab3d917d09d081f0149f9b8.jpg',200.00);


INSERT INTO Pedido
VALUES (40.0,'2021/01/01',1,11111111111111);
INSERT INTO Pedido
VALUES (60.0,'2021/01/02',2,22222222222222);

INSERT INTO PecasPedidas
VALUES (1,1,50,12.00);
INSERT INTO PecasPedidas
VALUES (2,1,50,20.00);
INSERT INTO PecasPedidas
VALUES (3,1,50,35.00);

INSERT INTO Cupom
VALUES ('15OFF','Porcentagem',30,'2021/12/12',15.00);

INSERT INTO Compra
VALUES (1,'2021/02/02','Dinheiro','12366215310',1,'15OFF');
INSERT INTO Compra
VALUES (2,'2021/02/02','Cartão de Crédito','56712345670',2,'15OFF');

INSERT INTO PecasCompradas
VALUES (1,1,1,35.00);
INSERT INTO PecasCompradas
VALUES (2,1,1,40.00);
INSERT INTO PecasCompradas
VALUES (3,2,1,70.00);

