// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx'; // 확장자까지 적는 게 안전

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
