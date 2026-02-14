export default function PriceFilter({ price, setPrice }) {
  return (
    <div className="mb-4">
      <h6 className="fw-semibold">Price Range</h6>

      <input
        type="range"
        min="0"
        max="500"
        className="form-range"
        value={price[1]}
        onChange={(e) => setPrice([0, Number(e.target.value)])}
      />

      <div className="fw-semibold">
        ₹0 — ₹{price[1]}
      </div>
    </div>
  );
}
