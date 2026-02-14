import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  return (
    <div className="row g-3 justify-content-center">
      {products.map((p) => (
        <div className="col-md-4  d-flex" key={p.id}>
          <ProductCard p={p} />
        </div>
      ))}
    </div>
  );
}


