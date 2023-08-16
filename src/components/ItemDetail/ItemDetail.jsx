import ItemCount from "../ItemCount/ItemCount";

const Item = ({id, name, img, category, price, description, stock}) => {
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
                    {description}
                </p>
            </section>
            <footer className='ItemFooter'>
                <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Items agregados ', quantity)}/>
            </footer>
        </article>
    );
};

export default Item;