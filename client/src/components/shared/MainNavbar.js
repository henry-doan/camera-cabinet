
import { AuthConsumer } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Font } from '../../styles/kitStyles';
import { NavBackground, NavBorder } from '../../styles/navbarStyles';

const MainNavbar = ({ user, handleLogout }) => {

  const rightNavItems = () => {
    // links will display when user is logged in 
    if (user) {
      return (
        <>
        
          <NavBackground>
            <Font>
              <Nav.Link>
                <Link to='/profile' 
                  style={{ 
                  color: 'white', 
                  textDecoration: 'none'
                  }}>
                    Profile
                </Link>
              </Nav.Link>
            </Font>
          </NavBackground>
          <NavBackground>
            <Font>
              <Nav.Link>
                <Link to='/about' 
                  style={{ 
                  color: 'white', 
                  textDecoration: 'none'
                  }}>
                    Our Team
                </Link>
              </Nav.Link>
            </Font>
          </NavBackground>
          <NavBackground>
            <Font>
              <Nav.Link>
                <Link to='/kits'
                  style={{ 
                  color: 'white', 
                  textDecoration: 'none'
                  }}>
                    Kits
                </Link>
              </Nav.Link>
            </Font>
          </NavBackground>
          {/* <Font>
            <Nav.Link>
              <Link to='/gears'
                style={{ 
                color: "#fe2712", 
                textDecoration: 'none'
                }}>
                  Gear
              </Link>
            </Nav.Link>
          </Font> */}
          <NavBackground>
          <Font>
            <Nav.Link onClick={ () => handleLogout() }>
              <Link to="/logout" 
                style={{ 
                color: 'white', 
                textDecoration: 'none'
                }}>
                Logout
              </Link>
            </Nav.Link>
          </Font>
          </NavBackground>
        </>
      )
    } else {
      // links will display when user is not logged in
      return (
        <>
          <NavBackground>
            <Font>
              <Nav.Link>
                <Link to='/login' 
                  style={{ 
                  color: 'white', 
                  textDecoration: 'none'
                  }}>
                    Login
                </Link>
              </Nav.Link>
            </Font>
          </NavBackground>
          <NavBackground>
            <Font>
              <Nav.Link>
                <Link to='/register' 
                  style={{ 
                  color: 'white', 
                  textDecoration: 'none'
                  }}>
                    Register
                </Link>
              </Nav.Link>
            </Font>
          </NavBackground>
        </>
      )
    }
  }

  return (
    <>
      <NavBackground>
        <Font>
          <Navbar variant="light">
            <Container>
              <Navbar.Brand className="mr-auto">
                <Link to="/" 
                  style={{ 
                  color: 'white', 
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
      </NavBackground>
    </>
  )
}

const ConnectedNavbar = (props) => (
  <AuthConsumer>
    { value => <MainNavbar {...props} {...value} />}
  </AuthConsumer>
)

export default ConnectedNavbar;