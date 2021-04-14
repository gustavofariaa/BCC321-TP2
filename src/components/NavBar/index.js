import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import api from '../../services/api'

export default function NavBar({setProducts}) {
    const {pathname} = useRouter()

    const [options, setOptions] = useState(null)
    const [filter, setFilter] = useState(null)
    const [filterValue, setFilterValue] = useState(null)
    const [isHome, setIsHome] = useState(false)

    useEffect(() => { setIsHome(pathname === '/') }, [pathname])

    const onChangeFilter = async (event) => {
        const {value} = event.target
        if (value === '') setOptions(null)
        setFilter(value)
        const {data} = await api.get(`/products/filters/${value}`)
        setFilterValue(data[0])
        setOptions(data)
    }

    const onChangeFilterValue= async (event) => {
        const {value} = event.target
        setFilterValue(value)
    }


    const onClick = async () => {
        if (filter && filterValue) {
            const {data} = await api.get(`/products/filters/${filter}/${filterValue}`);
            setProducts(data)
            var element = document.getElementById("grid-products");
            element.scrollIntoView();
        }
    }

    return (
        <nav className="uk-navbar-container uk-margin-medium-bottom" uk-navbar>
            <div className="uk-container">
                <div className="uk-navbar-left">
                    <a className="uk-navbar-item uk-logo" href="/"><strong>Store</strong></a>
                    {
                        isHome &&
                        <div className="uk-navbar-right">
                            <div className="uk-navbar-item">
                                <form action="javascript:void(0)">
                                    <select className="uk-select uk-form-width-small" 
                                        onChange={onChangeFilter}
                                        type="text" placeholder="Input">
                                        <option value='' selected disabled>Busca</option>
                                        <option value='size'>Tamanho</option>
                                        <option value='gender'>Gênero</option>
                                        <option value='type'>Tipo</option>
                                    </select>
                                    <select className="uk-select uk-form-width-small" onChange={onChangeFilterValue} disabled={!options} type="text" placeholder="Input">
                                        {options?.map?.((option, index) => <option key={index} value={option}>{option}</option>)}
                                    </select>
                                    <button className="uk-button uk-button-secondary" onClick={onClick}>OK</button>
                                </form>
                            </div>
                        </div>
                    }           
                </div>                
            </div>
        </nav>
    )
}