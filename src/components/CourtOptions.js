import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/CourtOption.css';


function CourtOptions() {
  const navigate = useNavigate();
  const { state } = useParams(); // Access the dynamic state parameter

  return (
    <div className="court-options">
      <h1>Options for {state}</h1>
      <button onClick={() => navigate(`/view-judgment/${state}`)}>
        View Judgments
      </button>
      <button onClick={() => navigate(`/upload-judgment/${state}`)}>
        Upload Judgments
      </button>
    </div>
  );
}

export default CourtOptions;
