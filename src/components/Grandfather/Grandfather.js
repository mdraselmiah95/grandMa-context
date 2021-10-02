import React from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";

const Grandfather = () => {
  return (
    <div>
      <h2>This is GrandFather.</h2>
      <div style={{ display: "flex" }}>
        <Father />
        <Uncle />
        <Aunty />
      </div>
    </div>
  );
};

export default Grandfather;
