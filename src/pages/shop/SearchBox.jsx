import { FaSearch } from "@react-icons/all-files/fa/FaSearch";

export default function SearchBox({ search, setSearch }) {
  return (
    <div className="mb-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search*"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <span className="input-group-text bg-white">
          <FaSearch size={16} />
        </span>
      </div>
    </div>
  );
}
