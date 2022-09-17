import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './pages/Layout';
import Home from './pages/Home';
import Cashier from './pages/Cashier';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cashier" element={<Cashier/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
