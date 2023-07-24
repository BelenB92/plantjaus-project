import plantHouse from './assets/plantHouse.svg'
import CardWidget from '../CartWidget/CartWidget';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
    return (
        <Navbar fixed="top" expand="md" className="bg-body-tertiary">
            <Container>
           <Navbar.Brand href="#home">
                <img src={plantHouse} alt='planthouse-logo' />
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">De interior</Nav.Link>
                    <Nav.Link href="#home">De exterior</Nav.Link>
                    <Nav.Link href="#home">Macetas</Nav.Link>
                </Nav>
                <CardWidget />
                </Container>
        </Navbar>




    );
};

export default NavBar;