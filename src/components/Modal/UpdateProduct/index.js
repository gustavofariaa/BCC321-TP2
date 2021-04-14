import api from '../../../services/api'

import * as Styles from './styles'
import {useState} from "react";

export default function ModalUpdateProduct({product, setIsModalVisible}) {
    const [nome, setName] = useState(product?.nome)
    const [color, setColor] = useState(product?.cor)
    const [descricao, setDesc] = useState(product?.descricao)
    const [valor_atual, setValue] = useState(product?.valor_atual)
    const [size, setSize] = useState(product?.tamanho)
    const [image, setImage] = useState(product?.imagem)


    const onCancel = () => setIsModalVisible(false)

    const onClick = async (event) => {
        event.preventDefault()
        await api.put(`/products/${product?.codigo}?cor=${color}&tamanho=${size}&imagem=${image}&nome=${nome}&descricao=${descricao}&valor_atual=${valor_atual}`)
        setIsModalVisible(false)
        location.reload()
    }

    return (
        <Styles.Modal>
            <form>
                <h2 className="uk-modal-title">Editar produto</h2>
                <div className="uk-margin">
                <label class="uk-form-label"><strong>Nome</strong></label>
                    <input name="nome"
                           className="uk-input uk-margin-small-bottom"
                           type="text"
                           value={nome}
                           onChange={event => setName(event.target.value)}
                           placeholder="Nome"
                           required
                    />
                    <label class="uk-form-label"><strong>Cor</strong></label>
                    <input name="cor"
                           className="uk-input uk-margin-small-bottom"
                           type="text"
                           value={color}
                           onChange={event => setColor(event.target.value)}
                           placeholder="Cor"
                           required
                    />
                    <label class="uk-form-label"><strong>Tamanho</strong></label>
                    <input name="tamanho"
                           className="uk-input uk-margin-small-bottom"
                           type="text"
                           value={size}
                           onChange={event => setSize(event.target.value)}
                           placeholder="Tamanho"
                           required
                    />
                    <label class="uk-form-label"><strong>Descrição</strong></label>
                    <textarea name="descricao"
                           className="uk-input uk-margin-small-bottom"
                           type="text"
                           value={descricao}
                           onChange={event => setDesc(event.target.value)}
                           placeholder="Descrição"
                           required
                    />
                    <label class="uk-form-label"><strong>Valor</strong></label>
                    <input name="valor_atual"
                           className="uk-input uk-margin-small-bottom"
                           type="number"
                           value={valor_atual}
                           onChange={event => setValue(event.target.value)}
                           placeholder="Valor"
                           required
                    />
                    <label class="uk-form-label"><strong>Imagem</strong></label>
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