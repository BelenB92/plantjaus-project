import './ItemCount.css';
import { useState } from "react"

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if(quantity < stock){
            setQuantity(quantity + 1)
        }
    };

    const decrement = () => {
        if(quantity > 1){
            setQuantity(quantity - 1)
        }
    };

    return(
        <div className='counter'>
            <div>
                <button className='button' onClick={decrement}>-</button>
                <h4 className='quantity'>{quantity}</h4>
                <button className='button' onClick={increment}>+</button>
            </div>
            <button className='buttonCart' onClick={() => onAdd(quantity)} disabled={!stock}>
                Agregar al carrito
            </button>
        </div>
    );
};

export default ItemCount;