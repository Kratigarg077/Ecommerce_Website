import SearchBox from "./SearchBox";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";

export default function Sidebar({ search, setSearch, category, setCategory, price, setPrice }) {
  return (
    <div className="border p-3 rounded">

      <SearchBox search={search} setSearch={setSearch} />

      <CategoryFilter category={category} setCategory={setCategory} />

      <PriceFilter price={price} setPrice={setPrice} />
      
    </div>
  );
}
