import CardProduct from '../CardProduct';
import ModalUpdateProduct from "../Modal/UpdateProduct";
import {useState} from "react";

export default function CardGrid({items}) {
    const [currentProduct, setCurrentProduct] = useState(null)
    const [isModalVisible, setIsModalVisible] = useState(false)

    return (
        <>
            <div class="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m uk-margin-medium-bottom" uk-grid>
                {items?.map?.(item => <CardProduct
                    product={item} setCurrentProduct={setCurrentProduct} setIsModalVisible={setIsModalVisible}/>)}
            </div>

            {isModalVisible && (
                <ModalUpdateProduct 
                    product={currentProduct} 
                    isModalVisible={isModalVisible} 
                    setIsModalVisible={setIsModalVisible}
                />
            )}
        </>
    );
}