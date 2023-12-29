import ContactUs from './components/ContactUs';
import About from './components/About';
import Solutions from './components/Solutions';
import Home from './components/Home';
import './styles/style.css';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/sumadhwa' element={<Home />}></Route>        
        <Route path='/sumadhwa/about' element={<About/>}></Route>
        <Route path='/sumadhwa/solutions' element={<Solutions />}></Route>
        <Route path='/sumadhwa/contact' element={<ContactUs />}></Route>
      </Routes>
    </div>
      
  );
}

export default App;
