import { Link } from 'react-router-dom';

const Item = ({id, name, img, price, stock}) => {
    return (
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className='ItemImg'/>
            </picture>
            <section>
                <p className='Info'>
                    ${price}
                </p>
                <p className='Info'>
                    Disponible: {stock}
                </p>
            </section>
            <footer className='ItemFooter'>
                <Link to={`/item/${id}`} className='DetailOpt'>Detalle</Link>
            </footer>
        </article>
    );
};

export default Item;

