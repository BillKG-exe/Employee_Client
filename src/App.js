import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Search from './pages/Search';
import Info from './pages/Info'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/search' exact element={<Search />} />
        <Route path='/employee/:search' exact element={<Info />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
