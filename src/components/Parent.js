import React, { useState } from "react";
import Child from "Child";

const Parent = () => {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };
  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <button onClick={handleButtonClick}>Show Modal</button>
      <Child showModal={showModal}></Child>
    </div>
  );
};
export default Parent;
