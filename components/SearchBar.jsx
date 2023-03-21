import { useState, useEffect } from "react";
import {
  selectProductsState,
  setSearchProductsState,
} from "store/productsSlice";
import { useSelector, useDispatch } from "react-redux";

const SearchBar = () => {
 
  const dispatch = useDispatch();
  const { searchProduct } = useSelector(selectProductsState);

  const handleInputChange = (event) => {
    dispatch(setSearchProductsState(event.target.value));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(setSearchProductsState(searchProduct));
  };

  return (
    <div className="d-flex align-items-center flex-grow-1 ">
      <form
        className="d-flex"
        style={{ display: "flex" }}
        onSubmit={handleFormSubmit}
      >
        <div
          className="form-group d-flex align-items-center"
          style={{ width: "700px", borderRadius: " 40px" }}
        >
          <input
            type="text"
            className="form-control rounded h-4 flex-1"
            placeholder="Search.."
            aria-label="Search"
            value={searchProduct}
            onChange={handleInputChange}
          />
          <div class="input-group-append d-flex border align-items-center">
            <button className="btn btn-danger" type="submit">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
