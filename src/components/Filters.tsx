import React, { useState } from "react";

const Filters = () => {
  const [filter, setFilter] = useState<string>("");

  return (
    <select
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      className="bg-gray-700 text-white w-[200px] rounded p-2 font-serif"
    >
      <option value="">Todos</option>
      <option value="Ciencia Ficción">Ciencia Ficción</option>
      <option value="Fantasía">Fantasía</option>
    </select>
  );
};

export default Filters;
