import React, { useState, useCallback } from "react";

import Title from "./components/Title";
import Summary from "./components/Summary";
import Button from "./components/Button";

function App() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(35000);

  const increaseAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const increaseSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <>
      <Title text={"UseMemo Hook"} />
      <Summary summary={"Age"} value={age} />
      <Button event={increaseAge}>Increase Age</Button>
      <Summary summary={"Salary"} value={salary} />
      <Button event={increaseSalary}>Increase Salary</Button>
    </>
  );
}

export default App;
