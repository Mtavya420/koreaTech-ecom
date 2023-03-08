import { useState } from "react";

const SearchBar = ({ products }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const filteredResults = products.filter((p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setResults(filteredResults);
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchQuery);
  };

  return (
    <div className="d-flex align-items-center flex-grow-1 ">
      <form
        className="d-flex"
        style={{ display: "flex" }}
        onSubmit={handleFormSubmit}
      >
        <div
          className="input-group"
          style={{ width: "700px", borderRadius: " 40px" }}
        >
          <input
            type="text"
            className="form-control"
            placeholder="Search.."
            aria-label="Search"
            value={searchQuery}
            onChange={handleInputChange}
          />
          <div className="input-group-append" style={{ marginLeft: "5px" }}>
            <button
              className="btn search-btn"
              type="button"
              style={{
                backgroundColor: "#FF2625",
                color: "#fff",
              }}
              onClick={() => handleSearch()}
            >
              Search
            </button>
            <ul>
              {results.map((p) => (
                <li key={p._id}>{p.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;

