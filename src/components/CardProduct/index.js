import * as Styles from './styles'

export default function CardProduct({image}) {
    return (
        <div class="uk-card uk-margin-medium-top">
            <div class="uk-card-media-top">
                <Styles.CardImage src={image} alt="" />
            </div>
            <div class="uk-card-body  uk-card-default">
                <h3 class="uk-card-title">Media Top</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                <div class="uk-flex uk-flex-right" uk-grid>
                    <a class="uk-button uk-button-text" href="/product">Ver produto</a>
                </div>
            </div>
        </div>
    )
}