import React, { useContext } from "react";
import { RingContext } from "../../App";

const Aunty = (props) => {
  const { house } = props;
  const ornaments = useContext(RingContext);
  return (
    <div>
      <h2>THis is Aunty.</h2>
      <h5>House: {house}</h5>
      {ornaments}
    </div>
  );
};

export default Aunty;
