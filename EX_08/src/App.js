import React, { useState, useCallback } from "react";

import "./App.css";

import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {        // 토글 값은 최신값이 아니라 처음 값을 가지고 있음 -> 왜냐면 useCallback()으로 함수갱신을 막아놨기 때문
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  },[allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
