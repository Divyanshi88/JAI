// src/components/StateSelection.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/StateSelection.css';

// List of Indian States
const statesList = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Lakshadweep", "Delhi", "Puducherry", "Ladakh"
];

function StateSelection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredStates, setFilteredStates] = useState(statesList);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    
    // Filter the states based on the search term
    const filtered = statesList.filter(state => 
      state.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredStates(filtered);
  };

  return (
    <div className="state-selection">
      <h1>Select a State for Court Judgments</h1>

      {/* Search Bar */}
      <input 
        type="text" 
        className="search-bar" 
        placeholder="Search for a state..." 
        value={searchTerm}
        onChange={handleSearch}
      />

      <div className="states-grid">
        {/* Display filtered states */}
        {filteredStates.map(state => (
          <Link to={`/court-options/${state.toLowerCase().replace(/\s+/g, '-')}`} className="state-item" key={state}>
            {state}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default StateSelection;
