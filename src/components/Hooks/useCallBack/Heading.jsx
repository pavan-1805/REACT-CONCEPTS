import React from "react";

const Heading = ({ title,count }) => {
  console.log(`${title} LOG`);
  return (
    <div>
      <h3>{title} {count}</h3>
    </div>
  );
};

export default React.memo(Heading);
