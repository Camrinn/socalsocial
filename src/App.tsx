import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



const App = () => (
  <Router>
    {/*Navbar will go under here */}
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />


    </Routes>
    <Footer />
     {/*Footer will go above here */}
  </Router>
);

export default App;
