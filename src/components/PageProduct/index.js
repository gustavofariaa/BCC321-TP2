import NavBar from '../NavBar'

import * as Styles from './styles'

export default function HomePage({product}) {
    return (
        <>
            <NavBar/>
            {product &&
            <div className="uk-container uk-flex uk-margin-medium-bottom" uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 200">
                <Styles.Image src={product?.imagem} alt=""/>
                <Styles.Container>
                    <p className="uk-text-large name">{product?.nome}</p>
                    <p className="uk-text-small">{product?.descricao}</p>
                    <p className="uk-text-large uk-text-right value">R$ {product?.valor_atual}</p>

                    <p className="info"><strong>Composição</strong>: {product?.composicao}</p>
                    <p className="info"><strong>Cor</strong>: {product?.cor}</p>
                    <p className="info"><strong>Gênero</strong>: {product?.genero}</p>
                    <p className="info"><strong>Marca</strong>: {product?.marca}</p>
                    <p className="info"><strong>Tamanho</strong>: {product?.tamanho}</p>
                    <p className="info"><strong>Tipo</strong>: {product?.tipo}</p>
                </Styles.Container>
            </div>
            }
        </>
    )
}