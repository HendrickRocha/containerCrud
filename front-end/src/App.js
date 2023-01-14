import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


import Container from './pages/Container';
import Move from './pages/Move';
import Report from './pages/Report';
import './styles/App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Container />} />
        <Route path='/move' element={<Move />} />
        <Route path='/report' element={<Report />} />
      </Routes>
    </Router>
  );
}

export default App;
