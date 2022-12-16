
import './App.css';
import { Routes, Route, Link } from "react-router-dom";

import Nav from './components/Nav';
import Milad from './pages/Milad';
import Tanner from './pages/Tanner';
import Desiree from './pages/Desiree';

function App() {
  return (
    <div className="App">
      <Nav />
    <Routes>


      <Route path="/desiree" element={<Desiree />} />
      <Route path="/tanner" element={<Tanner />} /> 
      <Route path="/milad" element={<Milad />} />





    </Routes>

    </div>
  );
}

export default App;
