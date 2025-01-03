import React from 'react';
import { useParams } from 'react-router-dom';

function DistrictCourtPage() {
  const { state } = useParams();

  return (
    <div>
      <h1>District Courts in {state}</h1>
      {/* You can now display data specific to the selected state */}
      <p>Displaying judgments for District Courts in {state}.</p>
    </div>
  );
}

export default DistrictCourtPage;
