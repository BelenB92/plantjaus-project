import './Item.css';
import { Link } from 'react-router-dom';

const  Item = ({id, name, img, price, stock}) => {
    return (
        <article className='cardItem'>
            <header>
                <h2 className='itemHeader'>
                    {name}
                </h2>
            </header>
            <picture className='imgItem'>
                <img style={{ width: 200, height: 280 }} src={img} alt={name}/>
            </picture>
            <section className='itemInfo'>
                <p>
                    ${price}
                </p>
                <p>
                    Disponible: {stock}
                </p>
            </section>
            <footer className='itemFooter'>
                <Link to={`/item/${id}`}>Detalle</Link>
            </footer>
        </article>
    );
};

export default Item;

