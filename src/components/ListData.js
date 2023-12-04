import React from "react";
import Cards from "./Cards";
import "../style/listdata.css";
import list from "../data";

const ListData = ({ handleClick }) => {
  return (
    <section>
      {list.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default ListData;
