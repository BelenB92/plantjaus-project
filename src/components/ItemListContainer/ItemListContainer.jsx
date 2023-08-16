import { useEffect, useState } from "react";
import { getProducts, getProdByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";

import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const asyncFunc = categoryId ? getProdByCategory : getProducts;

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(err => {
                console.error(err)
            });
    }, [categoryId]);

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    );
};

export default ItemListContainer;