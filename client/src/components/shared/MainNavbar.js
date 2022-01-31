
import { AuthConsumer } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Font } from '../../styles/kitStyles';
import { Header1 } from '../../styles/aboutStyles';

const MainNavbar = ({ user, handleLogout }) => {

  const rightNavItems = () => {
    // links will display when user is logged in 
    if (user) {
      return (
        <>
        <Font>
              <Nav.Link>
                <Link to='/profile' 
                  style={{ 
                  color: "#fe2712", 
                  textDecoration: 'none'
                  }}>
                    Profile
                </Link>
              </Nav.Link>
            </Font>
        <Font>
              <Nav.Link>
                <Link to='/about' 
                  style={{ 
                  color: "#fe2712", 
                  textDecoration: 'none'
                  }}>
                    About Us
                </Link>
              </Nav.Link>
            </Font>
          <Font>
              <Nav.Link>
                <Link to='/kits'
                  style={{ 
                  color: "#fe2712", 
                  textDecoration: 'none'
                  }}>
                    Kits
                </Link>
              </Nav.Link>
            </Font>
          <Font>
            <Nav.Link>
              <Link to='/gears'
                style={{ 
                color: "#fe2712", 
                textDecoration: 'none'
                }}>
                  Gear
              </Link>
            </Nav.Link>
          </Font>
          <Font>
            <Nav.Link onClick={ () => handleLogout() }>
              <Link to="/logout" 
                style={{ 
                color: "#fe2712", 
                textDecoration: 'none'
                }}>
                Logout
              </Link>
            </Nav.Link>
          </Font>
        </>
      )
    } else {
      // links will display when user is not logged in
      return (
        <>
          <Font>
            <Nav.Link>
              <Link to='/login' 
                style={{ 
                color: "#fe2712", 
                textDecoration: 'none'
                }}>
                  Login
              </Link>
            </Nav.Link>
          </Font>
          <Font>
            <Nav.Link>
              <Link to='/register' 
                style={{ color: 
                "#fe2712", 
                textDecoration: 'none'
                }}>
                  Register
              </Link>
            </Nav.Link>
          </Font>
        </>
      )
    }
  }

  return (
    <>
      <Font>
        <Navbar variant="light">
          <Container>
            <Navbar.Brand className="mr-auto">
              <Link to="/" 
                style={{ 
                color: "#fe2712", 
                textDecoration: 'none'
                }}>
                Camera Cabinet
              </Link>
            </Navbar.Brand>
            <Nav className="mr-auto">
              { rightNavItems() }
            </Nav>
          </Container>
        </Navbar>
      </Font>
    </>
  )
}

const ConnectedNavbar = (props) => (
  <AuthConsumer>
    { value => <MainNavbar {...props} {...value} />}
  </AuthConsumer>
)

export default ConnectedNavbar;