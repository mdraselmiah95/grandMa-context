import React from "react";
import Brother from "../Brother/Brother";
import MySelf from "../MySelf/MySelf";
import Sister from "../Sister/Sister";

const Father = (props) => {
  const { house } = props;
  return (
    <div>
      <h2>This is Father.</h2>
      <p>House: {house}</p>
      <div style={{ display: "flex" }}>
        <Brother house={house} />
        <MySelf house={house} />
        <Sister house={house} />
      </div>
    </div>
  );
};

export default Father;
