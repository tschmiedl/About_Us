import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/desiree" element={<Desiree />} />
      <Route path="/tanner" element={<Tanner />} />
      <Route path="/milad" element={<Milad />} />



    </Routes>


    </div>
  );
}

export default App;
