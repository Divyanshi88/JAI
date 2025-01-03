import React from 'react';
import { useParams } from 'react-router-dom';

function HighCourtPage() {
  const { state } = useParams();

  return (
    <div>
      <h1>High Court Judgments in {state}</h1>
      {/* You can now display data specific to the selected state */}
      <p>Displaying judgments for High Courts in {state}.</p>
    </div>
  );
}

export default HighCourtPage;
