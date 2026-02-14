import { Link } from "react-router-dom";
import { products as productsData } from "../data/products";

export default function Banner() {
  // Pick any 3 products from JSON
  const bannerProducts = productsData.slice(0, 3);

  return (
    <div className="py-5">
      <div className="container">
        <div className="row g-4">

          {bannerProducts.map((p) => (
            <div className="col-lg-4 col-md-6" key={p.id}>
              <div className="position-relative overflow-hidden rounded"
                   style={{ background: "#d0d0d0" }}>

                {/* IMAGE */}
                <img
                  src={p.images[0]}
                  alt={p.title}
                  className="w-100"
                  style={{ height: "260px", objectFit: "cover" }}
                />

                {/* TEXT BLOCK */}
                <div className="position-absolute top-50 start-0 translate-middle-y px-4">
                  <p className="mb-1 text-uppercase fw-semibold text-muted" 
                     style={{ fontSize: "14px" }}>
                    New Arrival
                  </p>

                  <h4 className="fw-bold mb-2">{p.title}</h4>

                  <Link
                    to={`/product/${p.id}`}
                    className="fw-semibold"
                    style={{ color: "#000", textDecoration: "underline" }}
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
