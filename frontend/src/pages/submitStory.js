import React, { useState } from "react";

const styles = `
  body { font-family: Yuji Syuku, Zen Kaku Gothic New; background-color: #f5f5f5; }
  .submit-container {
    padding: 60px 20px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #e4cabd;
  }
  h1 {
    font-size: 2.8rem;
    color: #5e4744;
    margin-bottom: 10px;
    text-align: center;
  }
  p.description {
    text-align: center;
    margin-bottom: 30px;
    color: #574141;
    max-width: 600px;
    font-size: 1.1rem;
  }
  form {
    background-color: #4a4a4a;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 3px 10px rgba(0,0,0,0.1);
    max-width: 650px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
  label {
    font-weight: bold;
    color: #e4cabd;
  }
  input, textarea, select {
    padding: 12px;
    border-radius: 8px;
    border: none;
    font-size: 1rem;
    background-color: #fef2f2;
    color: #3a3a3a;
    width: 100%;
  }
  textarea {
    resize: vertical;
    min-height: 120px;
  }
  button {
    padding: 14px;
    background-color: #bc8f8f;
    color: #fff5f5;
    border: none;
    border-radius: 12px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: background 0.2s;
  }
  button:hover {
    background-color: #e4cabd;
  }
`;

const grades = [
  "K", "1st", "2nd", "3rd", "4th", "5th",
  "6th", "7th", "8th",
  "9th (Freshman)", "10th (Sophomore)", "11th (Junior)", "12th (Senior)",
  "College", "Graduate", "Other"
];

const states = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
  "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
  "Wisconsin", "Wyoming"
];

const genres = [
  "Ethnic Studies", "Black History", "LGBTQ+", "Religion", "Biography",
  "Sci-Fi", "Young Adult", "Children", "Classics", "Comics", "History", "Other"
];

const SubmitStory = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="submit-container">
      <style>{styles}</style>
      <h1>🗣️ Share Your Story</h1>
      <p className="description">
        Tell us about a book that was banned or challenged in your school or community — and why it mattered to you.
        All responses are anonymous and help amplify voices impacted by censorship.
      </p>

      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Book Title</label>
            <input type="text" required placeholder="e.g. Gender Queer" />
          </div>

          <div>
            <label>Author</label>
            <input type="text" required placeholder="e.g. Maia Kobabe" />
          </div>

          <div>
            <label>Genre</label>
            <select required>
              <option value="">Select genre</option>
              {genres.map((g, idx) => <option key={idx} value={g}>{g}</option>)}
            </select>
          </div>

          <div>
            <label>Why did this book matter to you?</label>
            <textarea required placeholder="Your story..." />
          </div>

          <div>
            <label>School District</label>
            <input type="text" placeholder="e.g. Fairfax County Public Schools" />
          </div>

          <div>
            <label>Grade</label>
            <select>
              <option value="">Select grade</option>
              {grades.map((grade, idx) => <option key={idx} value={grade}>{grade}</option>)}
            </select>
          </div>

          <div>
            <label>State</label>
            <select>
              <option value="">Select state</option>
              {states.map((state, idx) => <option key={idx} value={state}>{state}</option>)}
            </select>
          </div>

          <button type="submit">Submit Story</button>
        </form>
      ) : (
        <h2 style={{ color: "#5e4744", marginTop: "40px", textAlign: "center" }}>
          ✅ Thank you for sharing your story! Your voice matters.
        </h2>
      )}
    </div>
  );
};

export default SubmitStory;
