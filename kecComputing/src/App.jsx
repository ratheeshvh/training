import "./App.css"
import ClassCompEg from "./Components/ClassComponents/ClassCompEg";
import Navbar from "./Components/FunctionalComponents/Navbar";
import Home from "./Components/FunctionalComponents/Home";
import About from "./Components/FunctionalComponents/About";
import Gallery from "./Components/FunctionalComponents/Gallery";
import UseEffect from "./Components/FunctionalComponents/UseEffect";
import UseContext from "./Components/FunctionalComponents/UseContext";
import UseRef from "./Components/FunctionalComponents/UseRef";
import Contact from "./Components/FunctionalComponents/Contact";
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App(){
  return(
      <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About College="Kongu Engineering" clg1="Kongu Arts" clg2="Naturopathy"/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/Useeffect" element={<UseEffect/>}/>
          <Route path="/useref" element={<UseRef/>}/>
          <Route path="/usecontext" element={<UseContext/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        </BrowserRouter>
        </div>
  )
  
}
export default App;