import { useRef } from "react";
import "./UseRef.css";
// UseState => Cosas externas a tu componente
// UseRef => Cosas internas a tu componente

export const FocusInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (!inputRef.current) {
      console.log("Doesn't existe the referent to the element");
      return;
    } // Es un elemento del DOM
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Write here..." />
      <button onClick={handleButtonClick}>Focus input</button>
    </div>
  );
};
