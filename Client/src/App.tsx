import { useCallback, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Al pasarle el consoleLoader como dependencia al fechtData
  // necesitamos usar un CallBack para evitar que se ejecute en cada render
  // y solo cuando se necesite (en este caso cuando cambie el loading)
  const consoleLoader = useCallback(
    (loagingValue: boolean) => {
      setLoading(loagingValue);
      console.log("Loading: ", loading);
    },
    [loading],
  );

  // Al pasasrle el fetchData como dependencia al UseEffect,
  // el fetchData necesita activarse solo cuando haya un cambio (en este caso el console loader)
  // por lo que al usar un CallBack, se evita que se ejecute en cada renderizado, solo cuando se necesite
  // y necesitamos pasarle el consoleLoader como dependencia
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

  // El useEffect al detectar que el fetchData tiene dependencias,
  // Necesita pasar el fechtData como dependencia para que se ejecute
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
