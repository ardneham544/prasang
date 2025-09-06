import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Home from './components/Home/Home.jsx';
import Service from './components/Service/Service.jsx';
import About from './components/About/About.jsx';
import Review from './components/Review/Review.jsx';
import ContactUs from './components/ContactUs/ContactUS.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Main pages */}
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/review" element={<Review />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
