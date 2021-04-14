import * as Styles from './styles'

export default function CardProduct({product,setCurrentProduct, setIsModalVisible}) {

    const handleOnClick = () => {
        setIsModalVisible(true)
        setCurrentProduct(product)
    }

    return (
        <div class="uk-card uk-margin-medium-top"  uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 200">
            <div class="uk-card-media-top">
                <Styles.CardImage src={product?.imagem} alt="" />
            </div>
            <div class="uk-card-body  uk-card-default">
                <h3 class="uk-card-title">{product?.nome}</h3>
                <p>{product?.valor_atual}</p>
                <p>{product?.descricao}</p>
                <div class="uk-flex uk-flex-right uk-margin-small-bottom" uk-grid>
                    <button className="uk-button uk-button-default" onClick={handleOnClick}>Editar</button>
                </div>
                <div className="uk-flex uk-flex-right" uk-grid>
                    <a className="uk-button uk-button-secondary" href={`/products/${product?.codigo}`}>Ver produto</a>
                </div>
            </div>
        </div>
    )
}