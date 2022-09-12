import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './pages/Layout';
import Inventory from './pages/Inventory';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inventory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
