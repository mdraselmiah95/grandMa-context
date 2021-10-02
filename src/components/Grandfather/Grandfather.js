import React from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";

const Grandfather = (props) => {
  const { house } = props;
  return (
    <div>
      <h2>This is GrandFather.</h2>
      <h4>House: {house}</h4>
      <div style={{ display: "flex" }}>
        <Father house={house} />
        <Uncle house={house} />
        <Aunty house={house} />
      </div>
    </div>
  );
};

export default Grandfather;
