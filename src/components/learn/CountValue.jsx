import React from "react";

const CountValue = ({ value, id }) => {
  console.log(id);

  return <b>{value}</b>;
};

export default React.memo(CountValue);
