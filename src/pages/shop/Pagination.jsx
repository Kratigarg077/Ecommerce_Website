import { FaAngleDoubleRight } from "@react-icons/all-files/fa/FaAngleDoubleRight";

export default function Pagination({ total, page, setPage, pageSize }) {
  const pages = Math.ceil(total / pageSize);

  if (pages <= 1) {
    return (
      <div className="d-flex justify-content-center mt-4">
        <div
          className="rounded-circle d-flex align-items-center justify-content-center"
          style={{
            width: "38px",
            height: "38px",
            background: "#FF8C00",
            color: "#fff",
            fontWeight: "600",
            cursor: "default",
          }}
        >
          1
        </div>
      </div>
    );
  }

  return (
    <div className="d-flex align-items-center gap-4 mt-4 justify-content-center">

      {/* Page Numbers */}
      {[...Array(pages)].map((_, i) => {
        const num = i + 1;

        return page === num ? (
          // ACTIVE PAGE (ORANGE CIRCLE)
          <div
            key={num}
            onClick={() => setPage(num)}
            className="rounded-circle d-flex align-items-center justify-content-center"
            style={{
              width: "38px",
              height: "38px",
              background: "#FF8C00",
              color: "#fff",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            {num}
          </div>
        ) : (
          // INACTIVE PAGE (PLAIN TEXT)
          <span
            key={num}
            onClick={() => setPage(num)}
            style={{
              cursor: "pointer",
              fontSize: "18px",
              color: "#222",
              fontWeight: "500",
            }}
          >
            {num}
          </span>
        );
      })}

      {/* NEXT ARROW */}
      <FaAngleDoubleRight
        onClick={() => page < pages && setPage(page + 1)}
        style={{
          cursor: page < pages ? "pointer" : "default",
          opacity: page < pages ? 1 : 0.4,
          fontSize: "20px",
        }}
      />
    </div>
  );
}


