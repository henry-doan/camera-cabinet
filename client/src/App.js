import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Nomatch from './components/shared/Nomatch';
import MainNavbar from './components/shared/MainNavbar';
import FetchUser from './components/auth/FetchUser';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Kits from './components/kit/Kits';
import KitShow from './components/kit/KitShow';
import GearShow from './components/gear/GearShow';
import Gears from './components/gear/Gears';
import { Container } from 'react-bootstrap';
// import DocumentShow from './components/document/DocumentShow';

const App = () => (
  <>
    <MainNavbar />
    <FetchUser>
      <Container>
      <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/' element={<ProtectedRoute /> }>
            <Route path='/kits' element={<Kits />} />
            {/* <Route path='/dash' element={<Dash />} /> */}
            <Route path='/gears' element={<Gears />} />
            <Route path='/kits/:kitId' element={<KitShow />} />
             <Route path='/:kitId/gear/:gearId' element={<GearShow />} /> 
             {/* <Route path='/:gearId/document/:documentId' element={<DocumentShow />} /> */}
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/*' element={<Nomatch />} />
          </Routes>
      </>
      </Container>
    </FetchUser>

  </>
)

export default App;
