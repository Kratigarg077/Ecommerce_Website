export default function SortDropdown({ sort, setSort }) {
  return (
    <select 
      className="form-select"
      style={{ width: "180px" }}
      value={sort}
      onChange={(e) => setSort(e.target.value)}
    >
      <option value="">Default</option>
      <option value="priceLow">Price: Low to High</option>
      <option value="priceHigh">Price: High to Low</option>
      <option value="latest">Newest</option>
    </select>
  );
}
