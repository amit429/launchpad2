import logo from './logo.svg';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Switch, Route , Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Portfolio from './Pages/Portfolio';
import About from './Pages/About';
import Resources from './Pages/Resources';
import Contact from './Pages/Contact';
import Teams from './Pages/Team';
import { launchPadTheme } from './Styles/theme';


//Hello

function App() {
  return (
    <>
      <ChakraProvider theme={launchPadTheme}>
        <Router>
          <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/portfolio" element={<Portfolio/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/resources" element={<Resources/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/team" element={<Teams/>} />
            </Routes>
          <Footer/>
        </Router>

      </ChakraProvider>
              

    
    </>
  );
}

export default App;
