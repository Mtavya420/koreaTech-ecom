import { useState, useEffect } from "react";
import {
  selectProductsState,
  setSearchProductsState,
} from "store/productsSlice";
import { useSelector, useDispatch } from "react-redux";

import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import Cart from "./Cart";
import { useStateContext } from "context/StateContext";

const SearchBar = () => {
  // const [searchQuery, setSearchQuery] = useState("");
  const { showCart, setShowCart, totalQuantities } = useStateContext();
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
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" href="/">
          Korea Tech
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav justify-content-center  mb-2 mb-lg-0 ">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                Categories
              </Link>
            </li>
          </ul>
          <form
            className="d-flex mx-auto"
            role="search"
            onSubmit={handleFormSubmit}
            
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchProduct}
              onChange={handleInputChange}
            />
            <button className="btn btn-danger" type="submit">
              Search
            </button>
          </form>
        </div>
        <div>
          <button
            type="button"
            className="cart-icon"
            onClick={() => setShowCart(true)}
          >
            <AiOutlineShopping />
            <span className="cart-item-qty">{totalQuantities}</span>
          </button>

          {showCart && <Cart />}
        </div>
      </div>
    </nav>
  );
};

export default SearchBar;
