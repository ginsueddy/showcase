import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/screens/Home';
import Booking from './components/screens/Booking';
import Logistics from './components/screens/Logistics';
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/booking' element={<Booking />} />
                <Route path='/logistics' element={<Logistics />} />
            </Routes>
        </Router>
    );
}

export default App;
