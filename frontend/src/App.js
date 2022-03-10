import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/screens/Home';
import Booking from './components/screens/Booking';
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/booking' element={<Booking />} />
            </Routes>
        </Router>
    );
}

export default App;
