import React from 'react';

const styles = `
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: 'Yuji Syuku', 'Zen Kaku Gothic New', sans-serif;
    background-color: #f5f5f5;
    color: #4a4a4a;
  }
  .libraries-page {
    padding: 40px 20px;
    min-height: 100vh;
    background-color: #57534E;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .libraries-header h1 {
    font-size: 2.5rem;
    color: #57534E;
    margin-bottom: 30px;
    text-align: center;
  }
  section {
    width: 100%;
    max-width: 900px;
    margin-bottom: 40px;
    background-color: #e4cabd;
    border-radius: 12px;
    padding: 24px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
  }
  section h2 {
    font-size: 1.6rem;
    margin-bottom: 16px;
    color: #57534E;
  }
  ul {
    list-style-type: disc;
    padding-left: 20px;
  }
  li {
    margin-bottom: 10px;
    font-size: 1.05rem;
    line-height: 1.5;
  }
  .lib-desc {
    color: #57534E; 
    font-size: 0.95rem;
  }
  a {
    color: #57534E;
    text-decoration: underline;
    transition: color 0.2s;
  }
  a:hover {
    color: #5e3a3a;
  }
  .local-library input {
    width: 100%;
    padding: 12px;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    background-color: #e4cabd;
    color: #4a4a4a;
    margin: 10px 0;
  }
  .note {
    font-style: italic;
    font-size: 0.95rem;
    color: #555;
  }
  .ebook-links {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
  .search-label {
    color: #57534E;
    font-weight: 500;
    margin-bottom: 8px;
  }

  .ebook-links a {
    background-color: #ecdcdc;
    padding: 10px 16px;
    border-radius: 10px;
    font-weight: 500;
    font-size: 1rem;
    text-align: center;
    text-decoration: none;
    transition: background-color 0.2s, transform 0.2s;
  }
  .ebook-links a:hover {
    background-color: #d2a8a8;
    transform: translateY(-3px);
  }
`;

const Libraries = () => {
  return (
    <>
      <style>{styles}</style>
      <main className="libraries-page">
        <section className="libraries-header">
          <h1>📚 Libraries & Access</h1>
        </section>

        <section className="open-access">
  <h2>Open Access Libraries</h2>
  <ul>
    <li>
      <a href="https://openlibrary.org/" target="_blank" rel="noopener noreferrer">
        Open Library
      </a>
      <span className="lib-desc"> – Millions of books available to borrow or read online.</span>
    </li>
    <li>
      <a href="https://www.overdrive.com/" target="_blank" rel="noopener noreferrer">
        Libby / OverDrive
      </a>
      <span className="lib-desc"> – Borrow ebooks and audiobooks with your library card.</span>
    </li>
    <li>
      <a href="https://archive.org/" target="_blank" rel="noopener noreferrer">
        Internet Archive
      </a>
      <span className="lib-desc"> – A vast collection of digitized books and cultural artifacts.</span>
    </li>
  </ul>
</section>

        <section className="local-library">
          <h2>Find a Local Library</h2>
          <p className="search-label">Search by city, ZIP code, or library system:</p>
          <input type="text" placeholder="Coming soon..." disabled />
          <p className="note">This feature will be available in a future update.</p>
        </section>

        <section className="free-ebooks">
          <h2>Free Ebooks by Theme</h2>
          <div className="ebook-links">
            <a href="#">Books on Black Identity</a>
            <a href="#">Books Challenging Power</a>
            <a href="#">Books Celebrating Resistance</a>
          </div>
        </section>
      </main>
    </>
  );
};

export default Libraries;
