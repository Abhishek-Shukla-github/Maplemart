import {Navbar, Nav, Container, Badge, NavDropdown} from 'react-bootstrap'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {CartItem as CartItemType} from "../types/HomeScreen"

const Header = () => {
    const {cartItems} = useSelector((state) => state.cart)
    const {userInfo} = useSelector((state) => state.auth)
    
    const generateBadge = () => {
        const count = cartItems.reduce((totalQty: number,item: CartItemType) => totalQty+item.qty,0)
        return (
            <Badge pill bg='success' style={{marginLeft: '5px'}}>{count}</Badge>
        )
    }

    const logoutHandler = () => {
        console.log("LOGOUT")
    }

   return (
    <header>
        <Navbar bg='dark' variant='dark' expand='md' collapseOnSelect>
            <Container>
                <Navbar.Brand as={Link} to='/'>
                <img src={logo} alt='ProShop' width={30} height={30} />
                    MapleMart
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav' >
                    <Nav className='ms-auto'>
                        <Nav.Link as={Link} to='/cart'>
                            <FaShoppingCart />
                            Cart
                            {cartItems.length > 0 && generateBadge()}
                        </Nav.Link>
                        {userInfo ? (
                            <>
                            <NavDropdown title={userInfo.name} id='username'>
                                <NavDropdown.Item as={Link} to='/profile'>
                                Profile
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={logoutHandler}>
                                Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                            </>
                        ) : (
                            <Nav.Link as={Link} to='/login'>
                            <FaUser /> Sign In
                            </Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header