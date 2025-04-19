import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo1 from '../utils/img/logo1.png';
import Search from '../components/searchbar/Search.js';
import user from '../utils/img/user.jpg';
import Button from 'react-bootstrap/esm/Button';
import { useAuth0 } from "@auth0/auth0-react";
import Cart1 from '../components/cart/Cart1.js'
import './Navbar.css'

function Header() {
  const { loginWithRedirect,isAuthenticated,user, logout } = useAuth0();
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container> <Navbar.Brand href="home">
        <img src={logo1} alt="Cleanser Logo" /> Organic Beauty
      </Navbar.Brand> <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            {/* <NavDropdown className='m-auto' title="Product"
              id="product-dropdown">
              <NavDropdown.Item className='m-auto' href="product/our-products">Our Products</NavDropdown.Item>
              <NavDropdown.Item className='m-auto' href="product/best-selling">Best Selling Product</NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="Home">Home</Nav.Link>




            <Nav.Link href="/Our_Products">Our Products</Nav.Link>

            <Nav.Link href="/Best_selling_products">Best Selling Products</Nav.Link>
            <Nav.Link href='/news'>News Letter</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            
            { isAuthenticated && <p> {user.name}</p>}
            {
              isAuthenticated ?(
                <button onClick={() => logout({ logoutParams: { returnTo: window.location.Home } })}>
                Log Out
              </button>

              ) : (
                <button onClick={() => loginWithRedirect()}>Log In</button>

              )
            }<div>
            <Search /> 
            </div>
 {/* <Cart1 /> */}
            {/* <div className='search'>
             <form>
                <input className='b1' type="text" name="name" placeholder="       Search here" />
                {/* /<input className='b2' type="submit" value="Go" /> */}
            
            
   
            {/* <NavDropdown title="Packaging" id="packazine-dropdown">
              <NavDropdown.Item href="packazine/without-plastic">Without Plastic</NavDropdown.Item>
              <NavDropdown.Item href="packazine/environment-supporting">Environment Supporting</NavDropdown.Item>
              
            </NavDropdown> */}
            {/* <button href='Sign-in' className="v1">Login</button> */}
            {/* <Nav.Link href='Search here' className='s1'> 

              <img src={Search} alt='Search here' />
            </Nav.Link> */}
            {/* <Nav.Link href='user'>
              <img src={user} alt='user' /> </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>



      </Container>
    </Navbar>

  );
}
export default Header;


