export default function CategoryFilter({ category, setCategory }) {
  const categories = ["All","Accessories", "Book", "Clothing", "Homelife", "Lifestyle", "Office","Furniture"];

  return (
    <div className="p-3 border rounded bg-white">
      <h6 className="fw-semibold mb-3">Product Categories</h6>

      <ul className="list-unstyled">
        {categories.map((cat) => {
          const isActive = cat === category;

          return (
            <li
              key={cat}
              className="mb-2"
              style={{ cursor: "pointer" }}
              onClick={() => setCategory(cat)}
            >
              <span
                style={{
                  color: isActive ? "#FF8C00" : "#6c757d", // grey muted
                  fontWeight: isActive ? "600" : "400",
                }}
              >
                {cat}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
