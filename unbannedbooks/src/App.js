import React, { useState } from 'react';
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
   padding: 20px; 
   background-color: white; 
   min-height: 100vh; 
   border: 2px solid #333; 
   }
  .header { 
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
  padding: 20px 0; 
  border-bottom: 2px solid #333; 
  margin-bottom: 30px; 
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
   padding: 10px; 
   }
  .nav a:hover, .nav a.active 
  { background-color: #f0f0f0; 
   border-radius: 5px; 
   }
  .search-container { 
  position: relative; 
  
  }
  .search { 
  padding: 10px 20px; 
  border: 2px solid #333; 
  border-radius: 25px; 
  font-size: 16px; 
  width: 200px; 
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
  .hero-section { 
  text-align: center; 
  padding: 40px 20px; 
  border: 2px solid #333; 
  border-radius: 10px; 
  margin-bottom: 30px; 
  background-color: #fafafa; 
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
  .wavy-line { 
  width: 100%; 
  height: 20px; 
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 10'%3E%3Cpath d='M0,5 Q25,0 50,5 T100,5' stroke='%23333' stroke-width='1' fill='none'/%3E%3C/svg%3E") repeat-x; 
  margin: 20px 0; 
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
  background-color: #fff; 
  border-radius: 5px; 
  }
  .resource-item { 
  border: 1px solid #ddd; 
  padding: 20px; 
  margin-bottom: 15px; 
  background-color: #fff; 
  border-radius: 5px; 
  }
`;

function App() {
  const [activePage, setActivePage] = useState('genres');
  const [searchTerm, setSearchTerm] = useState('');

  const handleNavClick = (page) => {
    setActivePage(page);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
    // You can implement actual search/filter logic here
    console.log('Searching for:', e.target.value);
  };

  return (
    <div>
      <style>{styles}</style>
      <header className="header">
        <image> <img src="images/logo.png" alt="Logo" /></image>
        <nav className="nav">
          <a
            href="#" //TODO add different pages 
            className={`nav-link${activePage === 'genres' ? ' active' : ''}`}
            onClick={() => handleNavClick('genres')}
          >
            genres
          </a>
          <a
            href="#"//TODO add different pages 
            className={`nav-link${activePage === 'libraries' ? ' active' : ''}`}
            onClick={() => handleNavClick('libraries')}
          >
            libraries
          </a>
          <a
            href="#"//TODO add different pages 
            className={`nav-link${activePage === 'resources' ? ' active' : ''}`}
            onClick={() => handleNavClick('resources')}
          >
            resources
          </a>
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

        {/* Genres Page */}
        <div id="genres" className={`page${activePage === 'genres' ? ' active' : ''}`}>
          <div className="hero-section"> </div>
          <h1 style={{ textAlign: "center" }}>Book Genres</h1>
            <p style={{ textAlign: "center" }}>Explore different categories of books and discover new stories</p>
            <div style={{ padding: "20px" }}> </div>
          <div className="mission">
            <h2 style={{ textAlign: "center" }}>Mission</h2>
            <p style={{ textAlign: "center" }}>
              To help readers discover books across all genres and connect with stories that inspire, educate, and entertain.
            </p>
          </div>
          <div className="grid-container">
            <div className="book-item">Fiction</div>
            <div className="book-item">Non-Fiction</div>
            <div className="book-item">Mystery</div>
            <div className="book-item">Romance</div>
            <div className="book-item">Sci-Fi</div>
            <div className="book-item">Biography</div>
          </div>
        </div>

        {/* Libraries Page */}
        <div id="libraries" className={`page${activePage === 'libraries' ? ' active' : ''}`}>
          <div className="hero-section">
            <h1>Libraries</h1>
            <p>Find local libraries and digital collections</p>
          </div>
          <div className="mission">
            <h2>Mission</h2>
            <p>
              To connect readers with library resources and promote access to books for everyone in the community.
            </p>
          </div>
          <div className="wavy-line"></div>
          <div className="grid-container">
            <div className="book-item">Central Library</div>
            <div className="book-item">Digital Collection</div>
            <div className="book-item">Community Branch</div>
            <div className="book-item">University Library</div>
            <div className="book-item">Mobile Library</div>
            <div className="book-item">Archive Center</div>
          </div>
        </div>

        {/* Resources Page */}
        <div id="resources" className={`page${activePage === 'resources' ? ' active' : ''}`}>
          <div className="hero-section">
            <h1>Resources</h1>
            <p>Tools and guides for readers and writers</p>
          </div>
          <div className="mission">
            <h2>Mission</h2>
            <p>
              To provide valuable resources that enhance the reading experience and support literacy development.
            </p>
          </div>
          <div className="wavy-line"></div>
          <div>
            <div className="resource-item">
              <h3>Reading Guides</h3>
              <p>Comprehensive guides to help you get the most out of your reading experience.</p>
            </div>
            <div className="resource-item">
              <h3>Book Reviews</h3>
              <p>Honest reviews and recommendations from fellow readers.</p>
            </div>
            <div className="resource-item">
              <h3>Writing Tools</h3>
              <p>Resources for aspiring writers including templates and style guides.</p>
            </div>
          </div>
        </div>
      </main>
   </div>
  );
}

export default App;
