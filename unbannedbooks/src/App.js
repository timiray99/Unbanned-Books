import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Genres from './pages/Genres.js';
import Libraries from './pages/libraries.js';
import Resources from './pages/resources.js';
import './App.css';

const styles = `
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { 
  font-family: Times New Roman, 
  sans-serif; 
  background-color: #f5f5f5; 
  }
  .container 
  { max-width: 1200px; 
   margin: 0 auto; 
   background-color: white; 
   min-height: 100vh; 
   border: 2px solid #333; 
   }
  .header { 
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
  border-bottom: 2px solid #333; 
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
}
  .nav 
  { 
  display: flex; 
  gap: 40px; 
   }
  .nav a 
  { text-decoration: none; 
   color: #333; 
   font-size: 18px; 
   cursor: pointer; 
   padding-bottom: 10px; 
   padding-top: 0px
   }
  .nav a:hover, .nav a.active 
  { 
    background-color: #e4cabd;
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
  width: 200px; 
  background-color: #e4cabd;
  }
  .content { 
  padding: 20px 0; 
  }
  .page { 
  display: none; 
  }
  .page.active { 
  display: block; 
  }
  .image-section { 
  text-align: center; 
  padding-bottom: 30px;
  margin-bottom: 20px; 
  background-color: #ebebeb;
  }
  .mission { 
  margin-top: 30px; 
  padding: 20px; 
  border-bottom: 2px solid #333; 
  }
  .mission h2 { 
  font-size: 24px; 
  margin-bottom: 15px; 
  text-decoration: underline; 
  }
  .footer-text { 
  position: absolute; 
  bottom: 20px; 
  left: 20px; 
  font-weight: bold; 
  }
  .grid-container { 
  display: grid; 
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
  gap: 20px; 
  margin-top: 20px; 
  }
  .book-item { 
  border: 1px solid #ddd; 
  padding: 15px; 
  text-align: center; 
  background-color: #ebebeb; 
  border-radius: 5px; 
  }
  .resource-item { 
  border: 1px solid #ddd; 
  padding: 20px; 
  margin-bottom: 15px; 
  background-color: #ebebeb; 
  border-radius: 5px; 
  }
`;

function Home() {
  return (
    <div id="App">
      <div className="image-section"> 
        <img src="images/books.png" alt="Bookshelf" />
      </div>
      <div className="mission">
        <h2 style={{ textAlign: "center" }}>Mission</h2>
        <p style={{ textAlign: "center" }}>
          We believe that access to knowledge and diverse perspectives is a fundamental right essential to a free and informed society. Our open source library platform democratizes access to educational materials and literature that have been restricted or banned in various jurisdictions, ensuring that geographical or political barriers cannot limit intellectual freedom.            
        </p>
        <p style={{ textAlign: "center" }}> 
          By providing unrestricted access to books covering ethnic studies, critical race theory, and other essential educational content, we empower individuals to engage with diverse viewpoints, understand historical and contemporary social issues, and form their own informed opinions. Our platform serves as a digital sanctuary for intellectual freedom, supporting educators, students, and curious minds who seek comprehensive understanding of our shared human experience.
        </p>
        <p style={{ textAlign: "center" }}>              
          We are committed to preserving the principles of free speech, promoting educational equity, and fostering critical thinking through open access to knowledge that builds bridges of understanding across communities.
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
          <Link to="/" className="nav-link">home</Link>
          <Link to="/genres" className="nav-link">genres</Link>
          <Link to="/libraries" className="nav-link">libraries</Link>
          <Link to="/resources" className="nav-link">resources</Link>
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
