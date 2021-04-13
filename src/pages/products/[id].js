import {useEffect, useState} from "react";

import PageProduct from '../../components/PageProduct'

import api from "../../services/api";

export async function getStaticPaths() {
    return { paths: [], fallback: true };
}

export async function getStaticProps({ params }) {
    const { id } = params;
    return { props: { id } };
}

export default function Product({ id }) {
    const [product, setProduct] = useState(null)

    useEffect(() => {
        (async () => {
            const {data} = await api.get(`/products/${id}`)
            setProduct(data?.[0])
        })()
    }, [id])

    return <PageProduct product={product} />;
}