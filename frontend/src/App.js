import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Genres from './pages/Genres.js';
import Libraries from './pages/libraries.js';
import Resources from './pages/resources.js';
import './App.css';

const styles = `
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { 
    font-family: Yuji Syuku, Zen Kaku Gothic New;
    background-color: #e4cabd; 
    color: #e4cabd;
  }
  .container { 
    max-width: 1200px;
    margin: 0 auto; 
    background-color: white; 
    min-height: 100vh; 
    border: 2px solid #333; 
    color: #e4cabd;
  }
  .header { 
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    border-bottom: 2px solid #333; 
    background-color: #57534E;
    color: #e4cabd;
  }
  .logo { 
    width: 60px; 
    height: 60px; 
    border: 2px solid #333; 
    border-radius: 50%; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    font-weight: bold; 
    color: #e4cabd;
  }
  .nav { 
    display: flex; 
    gap: 40px; 
  }
  .nav a { 
    text-decoration: none; 
    color: #e4cabd; 
    font-size: 18px; 
    cursor: pointer; 
    padding-bottom: 10px; 
    padding-top: 0px;
  }
  .nav a:hover, .nav a.active { 
    background-color: #e4cabd;
    color: #57534E;
    border-radius: 8px;
  }
  .search-container { 
    position: relative; 
    padding-right: 20px;
  }
  .search { 
    padding: 10px 20px; 
    border: 2px solid #333; 
    border-radius: 25px; 
    font-size: 16px; 
    color: #e4cabd !important;
    width: 200px; 
    background-color: #57534E;
  }
  .search::placeholder {
    color: #e4cabd;
    opacity: 1;
  }
  .content { 
    padding: 20px 0; 
    color: #e4cabd;
  }
  .page { 
    display: none; 
    color: #e4cabd;
  }
  .page.active { 
    display: block; 
    color: #e4cabd;
  }
  .image-section { 
    text-align: center; 
    padding-bottom: 30px;
    margin-bottom: 20px; 
    background-color: #e4cabd;
    color: #e4cabd;
  }
  .mission { 
    margin-top: 30px; 
    padding: 20px; 
    font-size: 20px;
    border-bottom: 2px solid #333; 
    background-color: #57534E;
    color: #e4cabd;
  }
  .mission h2 { 
    font-size: 35px; 
    margin-bottom: 15px; 
    text-decoration: underline; 
    color: #e4cabd;
  }
  .footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 32px;
    background: #e4cabd;
    color: #57534E;
    font-size: 18px;
    position: relative;
    bottom: 0;
    left: 0;
    margin-top: 40px;
  }
  .footer-text {
    color: #57534E;
    font-weight: bold;
    position: static; 
  }
  .grid-container { 
    display: grid; 
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
    gap: 20px; 
    margin-top: 20px; 
    color: #e4cabd;
  }
  .book-item { 
    border: 1px solid #ddd; 
    padding: 15px; 
    text-align: center; 
    background-color: #ebebeb; 
    border-radius: 5px; 
    color: #e4cabd;
  }
  .resource-item { 
    border: 1px solid #ddd; 
    padding: 20px; 
    margin-bottom: 15px; 
    background-color: #ebebeb; 
    border-radius: 5px; 
    color: #e4cabd;
  }
`;

function Home() {
  return (
    <div id="App">
      <div className="image-section"> 
        <img src="images/books.png" alt="Bookshelf" />
      </div>
      <div className="mission">
        <h2 style={{ textAlign: "center" }}>Our Mission</h2>
        <p style={{ textAlign: "center" }}>
          We believe access to knowledge and diverse perspectives is a fundamental right essential to a free society. Our open source library platform democratizes access to educational materials and literature that have been restricted or banned in various jurisdictions, ensuring that geographical or political barriers cannot limit intellectual freedom.
        </p>
        <p style={{ textAlign: "center", paddingTop: "20px" }}> 
         By providing unrestricted access to books covering ethnic studies, critical race theory, and other essential educational content, we empower individuals to engage with diverse viewpoints and form their own informed opinions. Our platform serves as a digital sanctuary for intellectual freedom, supporting educators, students, and curious minds while fostering critical thinking through open access to knowledge that builds bridges of understanding across communities.
        </p>
      </div>
    </div>
  );
}

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
    // You can implement actual search/filter logic here
    console.log('Searching for:', e.target.value);
  };

  return (
    <div style={{ backgroundColor: "#e4cabd" }}>
      <style>{styles}</style>
      <header className="header">
        <img src="/images/logo.png" alt="Logo" />
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/genres" className="nav-link">Genres</Link>
          <Link to="/libraries" className="nav-link">Libraries</Link>
          <Link to="/resources" className="nav-link">Resources</Link>
        </nav>
        <div className="search-container">
          <input
            type="text"
            className="search"
            placeholder="search"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </header>
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/libraries" element={<Libraries />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </main>
      <footer className="footer">
        <div className="footer-text">created through code2040</div>
        <div className="footer-text">2025</div>
      </footer>
    </div>
  );
}

export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
