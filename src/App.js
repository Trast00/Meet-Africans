import { Route, Routes } from 'react-router-dom';
import './App.css';
import Auth from './pages/Auth/Auth';
import Home from './pages/Home';
import Main from './pages/Main/Main';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/main' element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
