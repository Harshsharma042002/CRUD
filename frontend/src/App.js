import {BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Display from './Pages/Display';
import './App.css';
import Navbar from './Pages/Navbar';
function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/display" element={<Display/>}/>
      </Routes>
      </Router>
    </div>
    
  );
}

export default App;
