import React from "react";

function ProductItemPopup({ title, list, onClose }) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 "
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded  w-[50%]"
        onClick={(e) => e.stopPropagation()}
      >
        {" "}
        <h2 className="text-xl mb-4">{title}</h2>
        <ul className="list-disc pl-5">
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductItemPopup;
