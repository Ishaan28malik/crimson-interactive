import logo from './logo.svg';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Timer from './components/Timer';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/timer' element={<Timer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
