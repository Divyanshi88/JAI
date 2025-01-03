// src/components/CourtPage.js
import React from 'react';

function CourtPage() {
  const { courtType, state } = useParams(); // Access the state and court type from the URL

  return (
    <div className="court-page">
      <h1>{courtType === 'district' ? 'District Court' : 'High Court'} - {state.replace('-', ' ')}</h1>
      
      <div className="court-options">
        <Link 
          to={`/view-judgment/${courtType}/${state}`} 
          className="court-option-link"
        >
          View Judgment
        </Link>
        
        <Link 
          to={`/upload-judgment/${courtType}/${state}`} 
          className="court-option-link"
        >
          Upload Judgment
        </Link>
      </div>
    </div>
  );
}

export default CourtPage; // Ensure it's being exported properly
