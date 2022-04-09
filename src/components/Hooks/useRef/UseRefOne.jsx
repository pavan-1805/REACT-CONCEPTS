import React, { useEffect, useRef } from "react";

export const UseRefOne = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text"></input>
    </div>
  );
};
