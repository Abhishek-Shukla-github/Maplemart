import {Navbar, Nav, Container, Badge, NavDropdown} from 'react-bootstrap'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {CartItem as CartItemType, ReduxStoreType} from "../types/Types"
import { useLogoutMutation } from '../slices/userApiSlice';
import {eraseCredentials} from "../slices/authSlice";
import { resetCart } from '../slices/cartSlice';
import SearchBox from './SearchBox';

const Header = () => {
    const {cartItems} = useSelector((state: ReduxStoreType) => state.cart)
    const {userInfo} = useSelector((state: ReduxStoreType) => state.auth)
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [logoutApiCall] = useLogoutMutation();

    const generateBadge = () => {
        const count = cartItems.reduce((totalQty: number,item: CartItemType) => totalQty+item.qty,0)
        return (
            <Badge pill bg='success' style={{marginLeft: '5px'}}>{count}</Badge>
        )
    }

    const logoutHandler = async () => {
        try {
          await logoutApiCall().unwrap();
          dispatch(eraseCredentials());
          // NOTE: here we need to reset cart state for when a user logs out so the next
          // user doesn't inherit the previous users cart and shipping
          dispatch(resetCart());
          navigate('/login');
        } catch (err) {
          console.error(err);
        }
    };

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
                        <SearchBox />
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

                        {/* Admin Links */}
                        {userInfo && userInfo.isAdmin && (
                            <NavDropdown title='Admin' id='adminmenu'>
                            <NavDropdown.Item as={Link} to='/admin/productlist'>
                                Products
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/admin/orderlist'>
                                Orders
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/admin/userlist'>
                                Users
                            </NavDropdown.Item>
                            </NavDropdown>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header