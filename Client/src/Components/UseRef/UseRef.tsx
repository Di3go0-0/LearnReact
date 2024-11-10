// Objetivo 1: nos permite crear una referencia mutable que persiste durante todo el ciclo de vida del componente.
// Sin causar un re-render
// Objetivo 2: hacer referencia a un elemento del DOM

import { useRef, useState } from "react";
import "./UseRef.css";

// Ejemplo:
// Un marcador de un libro que utilizamos para guardar la ultima posicion de la lectura.
// No modifica el contenido del libro.

export const BookReader = () => {
  const currentPageRef = useRef<number>(1);
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    currentPageRef.current += 1; // currentPageRef es un objeto mutable, por lo que necesitamos current para acceder al valor actual
    console.log(`Current page: ${currentPageRef.current}`);
  };

  const previusPage = () => {
    if (currentPageRef.current < 1) {
      console.log("You are in the first page");
      return;
    }
    // currentPageRef.current -= 1;  currentPageRef es un objeto mutable, por lo que necesitamos current para acceder al valor actual
    console.log(`You went back to the page: ${currentPageRef.current}`);
  };

  const goToPage = (page: number) => {
    if (page < 1) {
      console.log("You can't go to a page less than 1");
    }
    currentPageRef.current = page;
    setCurrentPage(page);
    console.log("You jumped to the page: ", currentPageRef.current);
  };

  return (
    <div className="BookReader">
      <h2>BookReader</h2>
      <p>Current page: {currentPageRef.current}</p>
      {/* Por si solo no se ve porque no causa un re-render */}
      <p>Current page State: {currentPage}</p>
      {/* Causa un re-render, por lo que trae todos los valores y todo se actualiza */}
      <button onClick={previusPage}>Previous Page</button>
      <button onClick={nextPage}>Next Page</button>
      <button onClick={() => goToPage(5)}>Go to page 5</button>
    </div>
  );
};
