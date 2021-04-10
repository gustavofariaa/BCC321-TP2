import NavBar from '../NavBar'
import Hero from '../Hero'
import CardGrid from '../CardGrid'
import { useEffect, useState } from 'react'
import api from '../../services/api'

export default function HomePage() {
    
    const [products, setProducts] = useState([]); 
    
    useEffect( async () => {
        const {data} = await api.get('/products');
        console.log(data);
        setProducts(data);      
    },[]);
    
    return (
        <>
            <NavBar />
            <div class="uk-container">
                <Hero />
                <CardGrid items = {products}/>
            </div>
        </>
    )
}