import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Item = ({id, name, img, price, description, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0); 

    const {addItem} = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        };

        addItem(item, quantity)
    };

    return (
        <article className='cardItemDetail'>
            <header>
                <h2 className='itemHeader'>
                    {name}
                </h2>
            </header>
            <picture>
                <img  style={{ width: 300, height: 380 }} src={img} alt={name} className='ItemImg'/>
            </picture>
            <section className='itemInfoDetail'>
                <p>
                    ${price}
                </p>
                <p>
                    {description}
                </p>
            </section>
            <footer className='itemFooterDetail'>
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart'>Finalizar compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={10} onAdd={handleOnAdd}/>
                    )
                }
                
            </footer>
        </article>
    );
};

export default Item;