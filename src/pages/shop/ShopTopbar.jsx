import { FaTh } from "@react-icons/all-files/fa/FaTh";
import { FaList } from "@react-icons/all-files/fa/FaList";
import SortDropdown from "./SortDropdown";

export default function ShopTopbar({ total, sort, setSort, view, setView }) {
  const orange = "#FF8C00";

  return (
    <div className="d-flex justify-content-between align-items-center mb-3">
      
      <span className="text-muted">Showing {total} results</span>

      <div className="d-flex align-items-center gap-3">

        <SortDropdown sort={sort} setSort={setSort} />

        {/* GRID-LIST TOGGLE */}
        <FaTh 
          size={20}
          style={{ color: view === "grid" ? orange : "#555", cursor: "pointer" }}
          onClick={() => setView("grid")}
        />

        <FaList 
          size={20}
          style={{ color: view === "list" ? orange : "#555", cursor: "pointer" }}
          onClick={() => setView("list")}
        />

      </div>
    </div>
  );
}

