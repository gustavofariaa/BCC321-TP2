import * as Styles from './styles'

export default function CardProduct({product,setCurrentProduct, setIsModalVisible}) {

    const handleOnClick = () => {
        setIsModalVisible(true)
        setCurrentProduct(product)
    }

    return (
        <div class="uk-card uk-margin-medium-top">
            <div class="uk-card-media-top">
                <Styles.CardImage src={product?.imagem} alt="" />
            </div>
            <div class="uk-card-body  uk-card-default">
                <h3 class="uk-card-title">Media Top</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                <div class="uk-flex uk-flex-right uk-margin-small-bottom" uk-grid>
                    <button className="uk-button uk-button-default" onClick={handleOnClick}>Editar</button>
                </div>
                <div className="uk-flex uk-flex-right" uk-grid>
                    <a className="uk-button uk-button-secondary" href="/product">Ver produto</a>
                </div>
            </div>
        </div>
    )
}