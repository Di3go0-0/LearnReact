import { useEffect, useState } from "react";

type Data<T> = T | null;
type ErrorType = Error | null;

// T es un tipo generico que se le pasara al hook
// Por lo que sirve con cualquier tipo de dato
interface Params<T> {
  data: Data<T>;
  loading: boolean;
  error: ErrorType;
}
//Custom Hook

export const useFetch = <T>(url: string): Params<T> => {
  const [data, setData] = useState<Data<T>>(null); // useState que toma el tipo de dato T
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ErrorType>(null);

  useEffect(() => {
    // Manejamos los interruptores
    // {Es posible interumpir un endpoint}
    const controller = new AbortController();
    setLoading(true);

    const fetchData = async () => {
      try {
        // El contoller es el que se encarga de interrumpir la peticion
        // cuando se desmonta el componente
        const response = await fetch(url, controller);
        if (!response.ok) {
          throw new Error("Error en la peticion");
        }
        const jsonData = await response.json();
        setData(jsonData);
        setError(null);
      } catch (err) {
        // Si solo dejamos el `err` nos dice que es unknow, pero nosotros sabemos que no lo es
        // asi que lo marcamos como si fuera erro (que lo es)
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    // Retornamos una funcion que se ejecutara cuando se desmonte el componente
    // para que interrumpa el Fetch
    return () => {
      controller.abort();
    };
  }, [url]);
  return { data, loading, error };
};
