import React, { useRef, useEffect } from "react";

const ExampleComponent = () => {
  const prev = useRef(1);

  // также useref можно использовать как query selector или гет элемент

  useEffect(() => {
    document.addEventListener("scroll", () => {
      console.log(`prev: ${prev.current}, current: ${prev.current + 1}`);
      prev.current = prev.current + 1;
    });
  }, []);

  console.log("render");

  return (
    <>
      <p>Результат рендера будет в консоли!чек</p>
      <div
        style={{ width: "100px", height: "2000px", backgroundColor: "red" }}
      ></div>
    </>
  );
};

export default ExampleComponent;
