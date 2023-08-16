import plantHouse from './assets/plantHouse.svg'
import CartWidget from '../CartWidget/CartWidget';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar fixed="top" expand="md" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">
                    <Link to='/'>
                        <img src={plantHouse} alt='planthouse-logo' />
                    </Link>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <NavLink to={`/category/de-interior`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>De interior</NavLink>
                    <NavLink to={`/category/de-exterior`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>De Exterior</NavLink>
                    <NavLink to={`/category/macetas`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Macetas</NavLink>
                </Nav>
                <CartWidget />
                </Container>
        </Navbar>

    );
};

export default NavBar;