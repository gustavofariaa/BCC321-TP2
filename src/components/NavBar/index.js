export default function NavBar() {
    return (
        <nav class="uk-navbar-container uk-margin-medium-bottom" uk-navbar>
            <div class="uk-container">
                <div class="uk-navbar-left">
                    <ul class="uk-navbar-nav">
                        <li class="uk-active"><a href="/">Store</a></li>
                        <li><a href="#">Produtos 1</a></li>
                        <li><a href="#">Produtos 2</a></li>                        
                    </ul>    
                    <div class="uk-navbar-right">
                        <div class="uk-navbar-item">
                            <form action="javascript:void(0)">
                                <select class="uk-select uk-form-width-small" type="text" placeholder="Input">
                                    <option value='type'>Tipo</option>
                                    <option value='genre'>Genero</option>
                                    <option value='type'>Tipo</option>
                                </select>
                                <input class="uk-input uk-form-width-small" type="text" placeholder="Input"/>
                                <button class="uk-button uk-button-default"><span uk-icon="search" ></span></button>
                            </form>
                        </div>
                    </div>              
                </div>                
            </div>
        </nav>
    )
}