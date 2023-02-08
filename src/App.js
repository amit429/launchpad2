import logo from './logo.svg';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Switch, Route , Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';

function App() {
  return (
    <>
      <ChakraProvider>
        <Router>
          <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>} />
            </Routes>
        </Router>
      </ChakraProvider>
              

    
    </>
  );
}

export default App;
