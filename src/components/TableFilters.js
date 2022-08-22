import React from "react";

const TableFilters = () => {
  return (
    <div className="table-filters">
      <div className="table-filters-container">
        <div className="stable-checkbox-container">
          <input
            type="checkbox"
            name=""
            id="stableCoin"
            defaultChecked={true}
          />
          <label htmlFor="stableCoin">Avec Stable Coin</label>
        </div>
        <div className="no-list-btn">
          <p>Aucune Liste</p>
        </div>
        <div className="fav-list">
          <p>Liste des favoris</p>
          <img src="./assets/star-full.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default TableFilters;
