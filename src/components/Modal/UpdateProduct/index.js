import api from '../../../services/api'

import * as Styles from './styles'
import {useState} from "react";

export default function ModalUpdateProduct({product, setIsModalVisible}) {
    const [color, setColor] = useState(product?.cor)
    const [size, setSize] = useState(product?.tamanho)
    const [image, setImage] = useState(product?.imagem)


    const onCancel = () => setIsModalVisible(false)

    const onClick = async (event) => {
        event.preventDefault()
        await api.put(`/products/${product?.codigo}?cor=${color}&tamanho=${size}&imagem=${image}`)
        setIsModalVisible(false)
    }

    return (
        <Styles.Modal>
            <form>
                <h2 className="uk-modal-title">Editar produto</h2>
                <div className="uk-margin">
                    <input name="cor"
                           className="uk-input uk-margin-small-bottom"
                           type="text"
                           value={color}
                           onChange={event => setColor(event.target.value)}
                           placeholder="Cor"
                           required
                    />
                    <input name="tamanho"
                           className="uk-input uk-margin-small-bottom"
                           type="text"
                           value={size}
                           onChange={event => setSize(event.target.value)}
                           placeholder="Tamanho"
                           required
                    />
                    <input name="imagem"
                           className="uk-input uk-margin-small-bottom"
                           type="text"
                           value={image}
                           onChange={event => setImage(event.target.value)}
                           placeholder="Imagem"
                           required
                    />
                </div>
                <p className="uk-text-right">
                    <button className="uk-button uk-button-default uk-modal-close" onClick={onCancel}>Cancelar</button>
                    <button className="uk-button uk-button-secondary"  onClick={onClick}>Atualizar</button>
                </p>
            </form>
        </Styles.Modal>
    );
}