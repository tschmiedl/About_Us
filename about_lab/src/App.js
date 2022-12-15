
import './App.css';
import { Routes, Route, Link } from "react-router-dom";

import Tanner from './pages/Tanner';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
    <Routes>
      {/* <Route path="/desiree" element={<Desiree />} /> */}
      <Route path="/tanner" element={<Tanner />} />
      {/* <Route path="/milad" element={<Milad />} /> */}



    </Routes>


    </div>
  );
}

export default App;
