import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Cast from './pages/Cast';
import Rating from './pages/Rating';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import prime from './assets/prime.jpg';

function App() {
  return (
    <div className="app">
      {/* Background with Overlay */}
      <div className="background">
        <img src={prime} alt="Movie Background" />
        <div className="overlay"></div>
      </div>

      {/* Main Content */}
      <div className="content">
        <h1 className="title">🎬 Welcome to MovieVerse</h1>
        <p className="tagline">"Discover. Rate. Experience Cinema."</p>

        {/* Navigation */}
        <BrowserRouter>
          <nav>
            <ul>
             <li><Link to="/Home">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/cast">Cast</Link></li>
              <li><Link to="/rating">Rating</Link></li>
            </ul>
          </nav>

          {/* Page Routes */}
          <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About/>} />
            <Route path="/cast" element={<Cast />} />
            <Route path="/rating" element={<Rating />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
