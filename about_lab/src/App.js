import './App.css';
import { Routes, Route, Link } from "react-router-dom";


import Milad from './pages/Milad';


function App() {
  return (
    <div className="App">
    <Routes>

      {/* <Route path="/desiree" element={<Desiree />} />
      <Route path="/tanner" element={<Tanner />} /> */}
      <Route path="/milad" element={<Milad />} />




    </Routes>

    </div>
  );
}

export default App;
