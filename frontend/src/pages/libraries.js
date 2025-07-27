import React from 'react';
import './libraries.css'; 

const Libraries = () => {
  return (
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
            </a> – Millions of books available to borrow or read online.
          </li>
          <li>
            <a href="https://www.overdrive.com/" target="_blank" rel="noopener noreferrer">
              Libby / OverDrive
            </a> – Borrow ebooks and audiobooks with your library card.
          </li>
          <li>
            <a href="https://archive.org/" target="_blank" rel="noopener noreferrer">
              Internet Archive
            </a> – A vast collection of digitized books and cultural artifacts.
          </li>
        </ul>
      </section>

      <section className="local-library">
        <h2>Find a Local Library</h2>
        <p>Search by city, ZIP code, or library system:</p>
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
  );
};

export default Libraries;
