import { useState } from "react";

export default function NavBar() {
    const [options, setOptions] = useState(null)

    const handleSelect = async (event) => {
        console.log(event.target.value);
        setOptions([])
    }

    return (
        <nav class="uk-navbar-container uk-margin-medium-bottom" uk-navbar>
            <div class="uk-container">
                <div class="uk-navbar-left">
                    <a class="uk-navbar-item uk-logo" href="/"><strong>Store</strong></a>
                    <div class="uk-navbar-right">
                        <div class="uk-navbar-item">
                            <form action="javascript:void(0)">
                                <select class="uk-select uk-form-width-small" 
                                    onChange={handleSelect}
                                    type="text" placeholder="Input">
                                    <option value='size'>Tamanho</option>
                                    <option value='gender'>Gênero</option>
                                    <option value='type'>Tipo</option>
                                </select>
                                <select class="uk-select uk-form-width-small" disabled={!options} type="text" placeholder="Input">
                                    {options?.map?.((option, index) => <option key={index} value={option}>{option}</option>)}
                                </select>
                                <button class="uk-button uk-button-secondary">OK</button>
                            </form>
                        </div>
                    </div>              
                </div>                
            </div>
        </nav>
    )
}