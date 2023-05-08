import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./componets/login";
import Daftar from "./componets/daftar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Daftar' element={<Daftar />} />
      </Routes>
    </Router>
  );
}

export default App;
