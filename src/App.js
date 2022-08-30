import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './pages/details';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <header>
        <NavLink to="/">home</NavLink>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
