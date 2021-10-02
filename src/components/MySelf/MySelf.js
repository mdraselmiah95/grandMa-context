import React from "react";

const MySelf = (props) => {
  const { house } = props;
  return (
    <div>
      <h2>MySelf</h2>
      <h5>House: {house}</h5>
    </div>
  );
};

export default MySelf;
