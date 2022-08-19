import React from "react";

const TableFilters = () => {
  return (
    <div className="table-filters">
      <div className="table-filters-container">
        <input type="checkbox" name="" id="stableCoin" defaultChecked={true} />
        <label htmlFor="" id="stableCoin">
          Avec Stable Coin
        </label>
        <div className="no-list-btn">
          <p>Aucune Liste</p>
        </div>
      </div>
    </div>
  );
};

export default TableFilters;
