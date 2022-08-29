import React, { useEffect, useState } from "react";
import { setStableState } from "../actions/stable.action";
import { useDispatch } from "react-redux";
import { setListDisplay } from "../actions/list.action";

const TableFilters = () => {
  const [showStable, setShowStable] = useState(true);
  const dispatch = useDispatch();
  const [showFavList, setShowFavList] = useState(false);

  useEffect(() => {
    dispatch(setStableState(showStable));
    dispatch(setListDisplay(showFavList));
  }, [showStable, showFavList]);
  return (
    <div className="table-filters">
      <div className="table-filters-container">
        <div className="stable-checkbox-container">
          <input
            type="checkbox"
            name=""
            id="stableCoin"
            defaultChecked={true}
            onChange={() => setShowStable(!showStable)}
          />
          <label htmlFor="stableCoin">
            {showStable ? "Avec stable coin" : "Sans stable coin"}
          </label>
        </div>
        <div
          className={showFavList ? "no-list-btn" : "no-list-btn active"}
          onClick={() => setShowFavList(false)}
        >
          <p>Aucune Liste</p>
        </div>
        <div
          className={showFavList ? "fav-list active" : "fav-list"}
          onClick={() => setShowFavList(true)}
        >
          <p>Liste des favoris</p>
          <img src="./assets/star-full.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default TableFilters;
