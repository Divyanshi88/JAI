import React from 'react';
import { useParams } from 'react-router-dom';

function UploadJudgment() {
  const { state } = useParams(); // Access the state parameter

  return (
    <div>
      <h1>Upload Judgments for {state}</h1>
      {/* Add your logic for uploading judgments */}
    </div>
  );
}

export default UploadJudgment;
