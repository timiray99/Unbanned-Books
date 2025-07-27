import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const styles = `
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: 'Yuji Syuku', 'Zen Kaku Gothic New', sans-serif; background-color: #f5f5f5; }
  .resources-content {
    padding: 40px 20px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #e4cabd;
    color: #4a4a4a;
  }
  .section {
    max-width: 1000px;
    width: 100%;
    margin-bottom: 50px;
  }
  .section-title {
    font-size: 2rem;
    margin-bottom: 16px;
    color: #4a4a4a;
    text-align: center;
  }
  .section-desc {
    text-align: center;
    margin-bottom: 24px;
    font-size: 1.1rem;
  }
  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 20px;
    margin-top: 16px;
  }
  .card {
    background: #ecdcdc;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 14px rgba(0,0,0,0.12);
  }
  .card-title {
    font-weight: bold;
    margin-bottom: 10px;
    font-size: 1.1rem;
    color: #4a4a4a;
  }
  .link {
    color: #805151;
    text-decoration: underline;
    transition: color 0.2s;
  }
  .link:hover {
    color: #5e3a3a;
  }
  .quote {
    font-style: italic;
    background: #ecdcdc;
    border-left: 4px solid #e4bfbf;
    padding: 16px;
    border-radius: 10px;
    margin-bottom: 20px;
    color: #4a4a4a;
  }
  .placeholder-graphic {
    background: #ecdcdc;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #555;
    border-radius: 10px;
    font-style: italic;
  }
  .alert-card {
    background-color: #ecdcdc;
    border-left: 4px solid #805151;
    padding: 18px;
    border-radius: 10px;
  }
  .section .recharts-text {
    font-family: 'Yuji Syuku', sans-serif;
    fill: #5e4744;
  }
`;

const bookBanData = [
  { year: 2020, bans: 1145 },
  { year: 2021, bans: 2532 },
  { year: 2022, bans: 1386 },
  { year: 2023, bans: 3362 },
  { year: 2024, bans: 3362 }, // Example future value
];

const bookBanByStateData = [
  { state: "Florida", bans: 1406 },
  { state: "Texas", bans: 625 },
  { state: "Missouri", bans: 333 },
  { state: "Utah", bans: 281 },
  { state: "Pennsylvania", bans: 186 },
  { state: "South Carolina", bans: 132 },
  { state: "Idaho", bans: 125 },
  { state: "Tennessee", bans: 118 },
  { state: "North Carolina", bans: 58 },
  { state: "Oklahoma", bans: 55 },
];

const ResourcesPage = () => {
  return (
    <>
      <style>{styles}</style>
      <div className="resources-content">

        {/* What is Book Banning */}
        <section className="section">
          <h2 className="section-title">What Is Book Banning?</h2>
          <p className="section-desc">
            Book banning is the removal of books from libraries or schools due to content objections — often targeting marginalized voices.
            Learn more at <a className="link" href="https://pen.org/issue/book-bans/" target="_blank" rel="noreferrer">PEN America</a> or the <a className="link" href="https://www.ala.org/advocacy/bbooks" target="_blank" rel="noreferrer">ALA</a>.
          </p>
        </section>

        {/* Read the Banned Lists */}
        <section className="section">
          <h2 className="section-title">Read the Banned Lists</h2>
          <div className="card-grid">
            <div className="card">
              <div className="card-title">PEN America’s Book Ban Index</div>
              <a href="https://pen.org/index-of-banned-books/" target="_blank" rel="noreferrer" className="link">View Index →</a>
            </div>
            <div className="card">
              <div className="card-title">ALA Banned & Challenged Books</div>
              <a href="https://www.ala.org/advocacy/bbooks/frequentlychallengedbooks" target="_blank" rel="noreferrer" className="link">Explore List →</a>
            </div>
          </div>
        </section>

        {/* Know Your Rights */}
        <section className="section">
          <h2 className="section-title">Know Your Rights</h2>
          <div className="card-grid">
            <div className="card">
              <div className="card-title">Students</div>
              <ul>
                <li>You have the right to read diverse books.</li>
                <li>Organize peacefully against censorship.</li>
                <li>Use the First Amendment in schools.</li>
              </ul>
            </div>
            <div className="card">
              <div className="card-title">Educators</div>
              <ul>
                <li>Teach inclusive materials legally.</li>
                <li>Advocate for intellectual freedom.</li>
                <li>Know your district’s policies.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How to Report a Ban */}
        <section className="section">
          <h2 className="section-title">How to Report a Ban</h2>
          <div className="alert-card">
            📌 In a future version, users will be able to submit censorship incidents directly through our platform.
          </div>
        </section>

        {/* Take Action */}
        <section className="section">
          <h2 className="section-title">Take Action</h2>
          <div className="card-grid">
            <div className="card">
              <div className="card-title">We Need Diverse Books</div>
              <a href="https://diversebooks.org/" className="link" target="_blank" rel="noreferrer">Support Diversity →</a>
            </div>
            <div className="card">
              <div className="card-title">Freedom to Read Foundation</div>
              <a href="https://www.ftrf.org/" className="link" target="_blank" rel="noreferrer">Join the Fight →</a>
            </div>
            <div className="card">
              <div className="card-title">National Coalition Against Censorship</div>
              <a href="https://ncac.org/" className="link" target="_blank" rel="noreferrer">Take Action →</a>
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="section">
          <h2 className="section-title">Why It Matters</h2>
          <blockquote className="quote">
            “I write because we exist.” — Angie Thomas, <i>The Hate U Give</i>
          </blockquote>
          <p className="section-desc">
            Book bans don’t just remove stories — they erase identities. Authors and students alike lose the chance to see themselves reflected. Knowing what’s at stake helps us speak up.
          </p>

          <div style={{ width: "100%", height: 400 }}>
            <ResponsiveContainer>
              <BarChart
                data={bookBanData}
                margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" stroke="#5e4744" />
                <YAxis stroke="#5e4744" />
                <Tooltip />
                <Legend />
                <Bar dataKey="bans" fill="#b37070" name="Book Bans" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* New section: States With the Most Book Bans */}
        <section className="section">
          <h2 className="section-title">States With the Most Book Bans (2022-2023)</h2>
          <div style={{ width: "100%", height: 400, backgroundColor: "#ecdcdc", borderRadius: 12, padding: 24, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                layout="vertical"
                data={bookBanByStateData}
                margin={{ top: 20, right: 30, left: 100, bottom: 20 }}
              >
                <XAxis type="number" stroke="#5e4744" />
                <YAxis dataKey="state" type="category" stroke="#5e4744" />
                <Tooltip />
                <Bar dataKey="bans" fill="#b37070" name="Book Bans" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

      </div>
    </>
  );
};

export default ResourcesPage;
