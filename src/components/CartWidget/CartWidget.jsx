import { useContext } from 'react';
import cart from './assets/cart.svg'
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CardWidget = () => {
    const {totalQuantity} = useContext(CartContext);

    return(
        <Link to='/cart' className='CartWidget'>
        <img className='CartImg' src={cart} alt='cart-widget'/>
        </Link>
    );
};

export default CardWidget;