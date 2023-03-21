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
