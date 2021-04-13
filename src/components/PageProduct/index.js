import NavBar from '../NavBar'

import * as Styles from './styles'

export default function HomePage({product}) {
    return (
        <>
            <NavBar/>
            {product &&
            <div className="uk-container uk-flex">
                <Styles.Image src={product?.imagem} alt=""/>
                <Styles.Container>
                    <p>{product?.composicao}</p>
                    <p>{product?.cor}</p>
                    <p>{product?.genero}</p>
                    <p>{product?.marca}</p>
                    <p>{product?.tamanho}</p>
                    <p>{product?.tipo}</p>
                </Styles.Container>
            </div>
            }
        </>
    )
}