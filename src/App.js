import './App.css';
import Navigationbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './components/About';
import Trend from './components/Trend';
import Home from './components/Home';
// import Item from './components/Item';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
    <Navigationbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Trending" element={<Trend/>}/>
      <Route path="/About" element={<About/>}/>
    </Routes>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
