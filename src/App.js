import logo from './logo.svg';
import { ChakraProvider } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Loader from './Components/Loading Screen/Loader';
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
import BlogPage from './Pages/BlogPage';
import { launchPadTheme } from './Styles/theme';


//Hello

function App() {

  const [loading, setLoading] = useState(true);

  const loadData = async () => {

    setTimeout(() => {
        setLoading(false);
    }, 7000);

}

useEffect(() => {
    loadData();
}, [])

if (loading) {
    return (
        <Loader/>
    )
}

else {
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
              <Route path="/blogpage" element={<BlogPage/>} />
            </Routes>
          <Footer/>
        </Router>

      </ChakraProvider>
              

    
    </>
  );
  }
}

export default App;
