import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import districtImage from '../assets/images/image2.jpeg'; // Ensure correct path
import highCourtImage from '../assets/images/image3.jpeg'; // Ensure correct path
import supremeCourtImage from '../assets/images/supreme.jpeg'; // Ensure correct path
import '../styles/HomePage.css'; // Add custom styles
import Modal from './Modal'; // Import the modal component

function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Sample judgments data
  const topJudgments = [
    { court: "Supreme Court", case: "Case A vs Case B", summary: "Important ruling on XYZ." },
    { court: "High Court", case: "Case C vs Case D", summary: "Landmark decision on ABC." },
    { court: "District Court", case: "Case E vs Case F", summary: "Significant verdict on DEF." },
  ];

  // Handle search input
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Centralized Court Judgments</h1>
        <p>Your Gateway to Simplified Access of Court Judgments</p>
      </section>

      {/* Search Bar */}
      <section className="search-section">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search for judgments..."
          className="search-bar"
        />
      </section>

      {/* Court Selection Section */}
      <section className="court-selection">
        <h2>Choose Your Court</h2>
        <div className="court-grid">
          {/* District Court */}
          <Link to="/district" className="court-item">
            <img src={districtImage} alt="District Court" />
            <div className="overlay">
              <span>District Court</span>
            </div>
          </Link>

          {/* High Court */}
          <Link to="/high" className="court-item">
            <img src={highCourtImage} alt="High Court" />
            <div className="overlay">
              <span>High Court</span>
            </div>
          </Link>

          {/* Supreme Court */}
          <Link to="/supreme" className="court-item">
            <img src={supremeCourtImage} alt="Supreme Court" />
            <div className="overlay">
              <span>Supreme Court</span>
            </div>
          </Link>
        </div>
      </section>

      {/* Button to View Top Judgments */}
      <section className="top-judgments">
        <button className="btn-view-judgments" onClick={() => setIsModalOpen(true)}>
          View Top Judgments of Today
        </button>
      </section>

      {/* Modal for Top Judgments */}
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <h2>Top Judgments of Today</h2>
          <ul>
            {topJudgments.map((judgment, index) => (
              <li key={index}>
                <strong>{judgment.court}</strong>: {judgment.case}
                <p>{judgment.summary}</p>
              </li>
            ))}
          </ul>
        </Modal>
      )}
    </div>
  );
}

export default HomePage;
