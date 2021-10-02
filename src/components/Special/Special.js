import React, { useContext } from "react";
import { RingContext } from "../../App";

const Special = () => {
  const ornaments = useContext(RingContext);
  return (
    <div>
      <h2>Special</h2>
      {ornaments}
    </div>
  );
};

export default Special;
