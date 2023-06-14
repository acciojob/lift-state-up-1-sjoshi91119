import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const Child = ({ showModal, handleButtonClick }) => {
    return (
      <div>
        <button onClick={handleButtonClick}>Open Modal</button>
        {showModal && <Modal />}
      </div>
    );
  };

  const Modal = () => {
    return (
      <div className="modal">
        <h1>Modal Content</h1>
      </div>
    );
  };

  return (
    <div className="parent">
      <Child showModal={showModal} handleButtonClick={handleButtonClick} />
    </div>
  );
};

export default App;
