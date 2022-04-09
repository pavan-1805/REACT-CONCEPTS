import React, { useState, useCallback } from "react";
import Button from "./Button";
import Heading from "./Heading";

const Parent = () => {
  const [age, setAge] = useState(24);
  const [salary, setSalary] = useState(28000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      <h1>USE-CALLBACK</h1>
      <Heading title="AGE" count={age} />
      <Button buttonName="incrementAge" handleClick={incrementAge} />
      <Heading title="SALARY" count={salary} />
      <Button buttonName="incrementSalary" handleClick={incrementSalary} />
    </div>
  );
};

export default Parent;
