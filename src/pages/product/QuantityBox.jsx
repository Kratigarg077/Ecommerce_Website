import React, { useState } from "react";

export default function QuantityBox() {
  const [qty, setQty] = useState(1);

  return (
    <div
      className="d-flex align-items-center justify-content-between border px-3"
      style={{ width: "110px", height: "45px", borderRadius: "6px" }}
    >
      <button
        className="btn p-0"
        onClick={() => qty > 1 && setQty(qty - 1)}
      >
        −
      </button>

      <span>{qty}</span>

      <button className="btn p-0" onClick={() => setQty(qty + 1)}>
        +
      </button>
    </div>
  );
}
