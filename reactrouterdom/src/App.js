
import './App.css';

import Navlinks from './Components/Navlinks';

import Home from './Components/Home';
import About from './Components/About';
import Contactus from './Components/Contactus';

import FourOfour from './Components/FourOfour';

import{ BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {

  
  return (
    <div className="App">
    <h1>React router 6</h1>


    <BrowserRouter>
   
    <Navlinks/>
    <Routes>
    <Route path='/' exact={true} element={<Home/>} />
    <Route path='/about' exact={true} element={<About/>} />
    <Route path='/contact' exact={true} element={<Contactus/>} />
    <Route path='/*' exact={true} element={<FourOfour/>}/>
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
