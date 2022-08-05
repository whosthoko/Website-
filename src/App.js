import {Routes, Route} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

//CSS
import './App.css';
import Navbar from './components/Navbar';
import GlobalStyle, {Container} from './css/Global';

//Pages
import Home from './pages/Home';
import Mens from './pages/Mens';
import Womens from './pages/Womens';
import OurCanvas from './pages/OurCanvas';
import ShoppingBag from './pages/ShoppingBag';
import Login from './pages/Login';






const theme = {
  colors: {
    white: '#fff',
    black: '#000',
    
  },

  mobile: {
    xSmall: '829px'
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className='App'>
    <GlobalStyle/>
      <Navbar/>
      <Container>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Mens' element={<Mens />} />
        <Route path='/Womens' element={<Womens />} />
        <Route path='/OurCanvas' element={<OurCanvas />} />
        <Route path='/ShoppingBag' element={<ShoppingBag />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
      </Container>
    
    </div>
    </ThemeProvider>
  );
}

export default App;
