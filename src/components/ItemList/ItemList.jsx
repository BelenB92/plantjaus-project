import Item from '../Item/Item';

const ItemList = ({products}) => {
    return( 
        <div className='row'>
             {products.map(prod => <div className='col-md-4'> <Item key={prod.id} {...prod}/> </div>)}
        </div>
    );
};

export default ItemList;