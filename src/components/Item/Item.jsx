import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({id, name, img, price, stock}) => {
    return (
        <article className='cardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {name}
                </h2>
            </header>
            <picture>
                <img style={{ width: 200, height: 280 }} src={img} alt={name} className='ItemImg'/>
            </picture>
            <section>
                <p className='infoPrice'>
                    ${price}
                </p>
                <p className='infoStock'>
                    Disponible: {stock}
                </p>
            </section>
            <footer className='itemFooter'>
                <Link to={`/item/${id}`} className='DetailOpt'>Detalle</Link>
            </footer>
        </article>
    );
};

export default Item;

