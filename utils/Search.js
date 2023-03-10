export function search({ products, query }) {
  // This function should return the search results
  const results = products.filter((product) => {
    const nameMatch = product.name.toLowerCase().includes(query.toLowerCase());
    const descriptionMatch = product.desc
      .toLowerCase()
      .includes(query.toLowerCase());
    return nameMatch || descriptionMatch;
  });
  return results;
}

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
    <Link className="navbar-brand" href="#">
      Korea Tech
    </Link>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="#">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">
            Categories
          </Link>
        </li>
      </ul>
      <form className="d-flex" role="search" onSubmit={handleFormSubmit}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchProduct}
          onChange={handleInputChange}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  </div>
</nav>;
