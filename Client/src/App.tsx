import { useCallback, useEffect, useState } from "react";
import "./App.css";

//Unidad logica
// 1- States example: {const[data, setData] = useState([])}
//
// 2- Methods : const fetchData = () => {}
//
// 3- Effect

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const consoleLoader = useCallback(
    (loagingValue: boolean) => {
      setLoading(loagingValue);
      console.log("Loading: ", loading);
    },
    [loading],
  );

  const fetchData = useCallback(async () => {
    consoleLoader(true);
    try {
      const response = await fetch("https://api.example.com/data");
      if (!response.ok) {
        throw new Error("Error fetching data");
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (e) {
      setError(e as string);
    } finally {
      consoleLoader(false);
    }
  }, [consoleLoader]);

  //  Normalmente pondriamos en arreglo de dependencias {data}, aunque implicitamente se maneja
  //  el data con el fetchData, no es necesario pornerlo en el arreglo de dependecias del useEffect
  //  porque no lo usa directamente, y si lo ponemos este crearia un bucle.
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return <div>{JSON.stringify(data)}</div>;
}
export default App;

// Decl
////Mal uso Del UseEffect
//  //Maneja el estado de la aplicacion
//  useEffect(
//    () => {
//      //Logica
//      // 1- cuando se monta el componente
//      // 2- cada vez que se modificque uno de los valores del segundo parametro
//      //
//      return () => {
//        // Manejar el estado de la memoria
//      };
//    },
//    [
//      /* {`Arreglo de dependencias`} state */
//    ],
//  );
//  //Correcto us el useEffect
//  // Comunicamos con un API
//  // sincronizar con entidades externas
//  // operacioes asynconas
//  // parametros de entrada
//
