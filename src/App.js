import Navbar from './Component/Navbar'
import Home from './Page/Home';
import About from './Page/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Gallery from './Page/Gallery';
import Contact from './Page/Contact';
import Footer from './Component/Footer';
import Service from './Page/Service';

function App() {
  return (
    <>
     <BrowserRouter>
    <Navbar/>
    <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/About' element={<About/>} />
     <Route path='/Service' element={<Service/>}/>
     <Route path='/Contact' element={<Contact/>} />
     <Route path='/Gallery' element={<Gallery/>} />
     
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
   
  );
}

export default App;
