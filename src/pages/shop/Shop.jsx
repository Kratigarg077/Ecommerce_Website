import { useState } from "react";
import { products as productsData } from "../../data/products";
import ShopTopbar from "./ShopTopbar";
import Sidebar from "./Sidebar";
import ProductGrid from "./ProductGrid";
import ProductList from "./ProductList";
import Pagination from "./Pagination";

export default function Shop() {
  const [products] = useState(productsData);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [price, setPrice] = useState([0, 500]);
  const [sort, setSort] = useState("");
  const [view, setView] = useState("grid");
  const [page, setPage] = useState(1);

  const pageSize = 9;

  // FILTER LOGIC
  const filtered = products
    .filter(p => p.title.toLowerCase().includes(search.toLowerCase()))
    .filter(p => (category === "All" ? true : p.category === category))
    .filter(p => p.price >= price[0] && p.price <= price[1]);

  // SORT LOGIC
  if (sort === "priceLow") filtered.sort((a, b) => a.price - b.price);
  if (sort === "priceHigh") filtered.sort((a, b) => b.price - a.price);
  if (sort === "latest") filtered.sort((a, b) => b.id - a.id);

  // PAGINATION
  const start = (page - 1) * pageSize; //Page 1 → (1 − 1) * 9 = 0 → start at index 0 , Page 2 → (2 − 1) * 9 = 9 → start at index 9
  const currentProducts = filtered.slice(start, start + pageSize); //For page 1 → slice(0, 9), For page 2 → slice(9, 18)

  return (
    <div className="container py-4">
      <div className="row">

        {/* SIDEBAR */}
        <div className="col-lg-3">
          <Sidebar 
            search={search} setSearch={setSearch}
            category={category} setCategory={setCategory}
            price={price} setPrice={setPrice}
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="col-lg-9">

          <ShopTopbar 
            total={filtered.length}
            sort={sort} setSort={setSort}
            view={view} setView={setView}
          />

          {view === "grid" ? (
            <ProductGrid products={currentProducts} />
          ) : (
            <ProductList products={currentProducts} />
            
          )}

          <Pagination 
            total={filtered.length}
            page={page}
            setPage={setPage}
            pageSize={pageSize}
          />
        </div>

      </div>
    </div>
  );
}
