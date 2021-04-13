export default function ModalUpdateProduct({product}) {
    console.log(product)
    return (
        <div id="modal-update-product" uk-modal>
            <div className="uk-modal-dialog uk-modal-body">
                <h2 className="uk-modal-title">Editar produto</h2>
                <form>
                    <div className="uk-margin">
                        <input name="cor"
                               className="uk-input uk-margin-small-bottom"
                               type="text"
                               value={product?.cor}
                               placeholder="Cor"
                               required
                        />
                        <input name="tamanho"
                               className="uk-input uk-margin-small-bottom"
                               type="text"
                               value={product?.tamanho}
                               placeholder="Tamanho"
                               required
                        />
                        <input name="imagem"
                               className="uk-input uk-margin-small-bottom"
                               type="text"
                               value={product?.imagem}
                               placeholder="Imagem"
                               required
                        />
                    </div>
                    <p className="uk-text-right">
                        <button className="uk-button uk-button-default uk-modal-close" type="button">Cancelar</button>
                        <button type="submit" className="uk-button uk-button-secondary">Atualizar</button>
                    </p>
                </form>
            </div>
        </div>
    );
}