import React, { useState } from 'react';

const styles = `
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: Yuji Syuku, Zen Kaku Gothic New; background-color: #f5f5f5; }
  .content { padding: 40px 0; min-height: 100vh; display: flex; flex-direction: column; align-items: center; }
  .genres-title { text-align: center; margin-bottom: 10px; color: #57534E; }
  .genres-desc { text-align: center; margin-bottom: 20px; }
  .filter-tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin-bottom: 30px;
  }
  .tag-btn {
    padding: 8px 16px;
    font-size: 0.95rem;
    border-radius: 20px;
    border: 1px solid #805151;
    background-color: transparent;
    color: #805151;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .tag-btn.active {
    background-color: #805151;
    color: #fef2f2;
  }
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 32px;
    max-width: 900px;
    margin: 0 auto;
    justify-items: center;
    background: #e4cabd;
    padding: 20px;
    border-radius: 12px;
  }
  .book-item {
    background: #f4d4d4;
    border-radius: 10px;
    padding: 18px 12px;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0,0,0,0.07);
    transition: transform 0.15s;
    width: 180px;
    position: relative;
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
  .hover-fact {
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.3s ease;
    background-color: #57534E;
    color: #f4d4d4;
    padding: 10px;
    border-radius: 8px;
    position: absolute;
    z-index: 10;
    width: 200px;
    font-size: 0.9rem;
    text-align: left;
    top: 160px;
    left: 50%;
    transform: translateX(-50%);
  }
  .book-item:hover .hover-fact {
    visibility: visible;
    opacity: 1;
  }
`;

const books = [
  {
    title: "Critical Race Theory",
    img: "/images/stamped.png",
    tags: ["Race", "Ethnic Studies", "Resistance"],
    fact: "Books on race and CRT are among the most frequently banned in U.S. schools."
  },
  {
    title: "Ethnic Studies",
    img: "/images/migrant.png",
    tags: ["Immigration", "Race"],
    fact: "Books that explore immigration or Latinx identity are often targeted in border states."
  },
  {
    title: "Black History",
    img: "/images/jimcrow.png",
    tags: ["Race", "History", "Resistance"],
    fact: "Books that discuss systemic racism or Black resistance movements are often removed from curricula."
  },
  {
    title: "Genocide Studies",
    img: "/images/palestine.png",
    tags: ["History", "Resistance", "Religion"],
    fact: "Historical texts covering genocide or human rights abuses face bans for being 'controversial.'"
  },
  {
    title: "Religious Studies",
    img: "/images/satanic.png",
    tags: ["Religion", "Free Expression"],
    fact: "Books perceived as critical of religion or exploring minority faiths are frequently challenged."
  },
  {
    title: "Biography",
    img: "/images/frank.png",
    tags: ["Biography", "History", "Genocide"],
    fact: "Memoirs by Holocaust survivors or activists have been banned for 'disturbing content.'"
  },
  {
    title: "Comics",
    img: "/images/genderqueer.png",
    tags: ["LGBTQ+", "Graphic Novel"],
    fact: "LGBTQ+ graphic novels are among the top 10 most banned books every year."
  },
  {
    title: "Classics",
    img: "/images/mocking.png",
    tags: ["Race", "Coming of Age"],
    fact: "Even classic books are banned for addressing racism, sexual assault, or 'inappropriate language.'"
  },
  {
    title: "Children's books",
    img: "/images/last.png",
    tags: ["Children", "Family", "Resistance"],
    fact: "Books featuring nontraditional families or activism are being removed from elementary schools."
  },
  {
    title: "Indigenous History",
    img: "/images/absolutely.jpg",
    tags: ["Indigenous", "History", "Race"],
    fact: "Books on Indigenous identity are banned for challenging the 'dominant narrative' in U.S. history."
  },
  {
    title: "Sci-Fi",
    img: "/images/handmaid.png",
    tags: ["Sci-Fi", "Feminism", "Resistance"],
    fact: "Feminist dystopias like *The Handmaid’s Tale* are often banned for promoting 'political agendas.'"
  },
  {
    title: "Young Adult",
    img: "/images/boys.png",
    tags: ["LGBTQ+", "Coming of Age"],
    fact: "YA books exploring queer identities or teen mental health are among the most challenged."
  },
];

// Get unique tags without duplicates
const allTags = Array.from(new Set(books.flatMap(book => book.tags)));

function Genres() {
  const [activeTags, setActiveTags] = useState([]);

  const toggleTag = (tag) => {
    setActiveTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const filteredBooks = activeTags.length === 0
    ? books
    : books.filter(book =>
        activeTags.every(tag => book.tags.includes(tag))
      );

  return (
    <div style={{ backgroundColor: "#e4cabd", minHeight: "100vh" }}>
      <style>{styles}</style>
      <main className="content">
        <div>
          <h1 className="genres-title">Book Genres</h1>
          <p className="genres-desc">Filter books by theme and discover stories being silenced</p>
        </div>

        {/* Tag Filters */}
        <div className="filter-tags">
          {allTags.map((tag, idx) => (
            <button
              key={idx}
              className={`tag-btn ${activeTags.includes(tag) ? "active" : ""}`}
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Books Grid */}
        <div className="grid-container">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book, idx) => (
              <div className="book-item" key={idx}>
                <img src={book.img} alt={book.title} className="book-img" />
                <div className="book-title">{book.title}</div>
                <div className="hover-fact">{book.fact}</div>
              </div>
            ))
          ) : (
            <p>No books match your selected tags.</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default Genres;
