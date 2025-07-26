import React from 'react';

const styles = `
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: Times New Roman, sans-serif; background-color: #f5f5f5; }
  .content { padding: 40px 0; min-height: 100vh; display: flex; flex-direction: column; align-items: center; }
  .genres-title { text-align: center; margin-bottom: 10px; }
  .genres-desc { text-align: center; margin-bottom: 30px; }
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 32px;
    max-width: 900px;
    margin: 0 auto;
    justify-items: center;
  }
  .book-item {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 18px 12px;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0,0,0,0.07);
    transition: transform 0.15s;
    width: 180px;
  }
  .book-item:hover {
    transform: translateY(-6px) scale(1.04);
    box-shadow: 0 6px 18px rgba(0,0,0,0.13);
  }
  .book-img {
    width: 100px;
    height: 140px;
    object-fit: cover;
    border-radius: 6px;
    margin-bottom: 12px;
    background: #ebebeb;
  }
  .book-title {
    font-size: 1.08rem;
    font-weight: bold;
    color: #333;
    margin-top: 6px;
  }
`;

const books = [
  { title: "Critical Race Theory", img: "/images/stamped.png" },
  { title: "Ethnic Studies", img: "/images/absolutely.png" },
  { title: "Black History", img: "/images/absolutely.png" },
  { title: "Genocide Studies", img: "/images/palestine.png" },
  { title: "Religious Studies", img: "/images/absolutely.png" },
  { title: "Biography", img: "/images/biography.png" },
  { title: "Comics", img: "/images/genderqueer.png" },
  { title: "Classics", img: "/images/mystery.png" },
  { title: "Children's books", img: "/images/absolutely.png" },
  { title: "Indigenous History", img: "/images/romance.png" },
  { title: "Sci-Fi", img: "/images/scifi.png" },
  { title: "Young Adult", img: "/images/absolutely.png" },
];

function Genres() {
  return (
    <div style={{ backgroundColor: "#e4cabd", minHeight: "100vh" }}>
      <style>{styles}</style>
      <main className="content">
        <div> 
          <h1 className="genres-title">Book Genres</h1>
          <p className="genres-desc">Explore different categories of books and discover new stories</p>
        </div>
        <div className="grid-container">
          {books.map((book, idx) => (
            <div className="book-item" key={idx}>
              <img
                src={book.img}
                alt={book.title}
                className="book-img"
              />
              <div className="book-title">{book.title}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Genres;
