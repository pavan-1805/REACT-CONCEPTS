import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [counterOne, setcounterOne] = useState(0);
  const [counterTwo, setcounterTwo] = useState(0);
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 1000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);
  return (
    <div>
      countOne:{counterOne} {isEven ? "even" : "odd"}
      <br></br>
      <button onClick={() => setcounterOne(counterOne + 1)}>
        countOne increment
      </button>
      <br></br>
      counterTwo:{counterTwo}
      <br></br>
      <button onClick={() => setcounterTwo(counterTwo + 1)}>
        countTwo increment
      </button>
    </div>
  );
};

export default UseMemo;
