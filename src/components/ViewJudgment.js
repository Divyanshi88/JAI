import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/ViewJudgment.css';

function ViewJudgment() {
  const { state } = useParams(); // Access the state parameter
  const navigate = useNavigate(); // For navigation

  const handleOptionClick = (option) => {
    // Navigate to the corresponding page based on the selected option
    navigate(`/${option.toLowerCase().replace(/\s+/g, '-')}`);
  };

  return (
    <div className="view-judgment-container">
      <h1>View Judgments for {state}</h1>
      <p>Select an option to view judgments:</p>
      <div className="options-container">
        <button
          className="cta-button"
          onClick={() => handleOptionClick('Neutral Citation')}
        >
          Neutral Citation
        </button>
        <button
          className="cta-button"
          onClick={() => handleOptionClick('Category Wise')}
        >
          Category Wise
        </button>
        <button
          className="cta-button"
          onClick={() => handleOptionClick('Delhi High Court')}
        >
          Delhi High Court
        </button>
        <button
          className="cta-button"
          onClick={() => handleOptionClick('Sitting Judges')}
        >
          Sitting Judges
        </button>
        <button
          className="cta-button"
          onClick={() => handleOptionClick('Former Judges')}
        >
          Former Judges
        </button>
        <button
          className="cta-button"
          onClick={() => handleOptionClick('Case Number')}
        >
          Case Number
        </button>
        <button
          className="cta-button"
          onClick={() => handleOptionClick('Free Text Search')}
        >
          Free Text Search
        </button>
        <button
          className="cta-button"
          onClick={() => handleOptionClick('Judgment Date')}
        >
          Judgment Date
        </button>
      </div>
    </div>
  );
}

export default ViewJudgment;
