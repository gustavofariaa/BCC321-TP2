import * as Styles from './styles'

export default function CardProduct({product,setCurrentProduct, setIsModalVisible}) {

    const handleOnClick = () => {
        setIsModalVisible(true)
        setCurrentProduct(product)
    }

    return (
        <div className="uk-card uk-margin-medium-top" uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 200">
            <Styles.Card>
                <div className="uk-card-media-top">
                    <Styles.CardImage src={product?.imagem} alt="" />
                </div>
                <div className="uk-card-body uk-card-default">
                    <h3 className="uk-card-title name">{product?.nome}</h3>
                    <p className="description">{product?.descricao}</p>
                    <p className="value">R$ {product?.valor_atual}</p>
                    <div className="uk-flex uk-flex uk-margin-medium-top uk-margin-small-bottom" uk-grid>
                        <button className="uk-button uk-button-default" onClick={handleOnClick}>Editar</button>
                        <a className="uk-button uk-button-secondary" href={`/products/${product?.codigo}`}>Ver produto</a>
                    </div>
                </div>
            </Styles.Card>
        </div>
    )
}