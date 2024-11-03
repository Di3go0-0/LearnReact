import { createContext, useContext } from "react";

// interface para definir el tipo de dato que va a tener el contexto
interface GlobalContextType {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

// Creamos el contexto con el tipo de dato GlobalContextType
export const GlobalContext = createContext<GlobalContextType>({
  // Inicializamos los valores del contexto
  value: 0, // Inicializamos el valor tipo number en 0
  setValue: () => {}, // Lo Inicializamos con un metodo vacio
});

// Hook para usar el contexto
export const useGlobalContext = () => {
  // Definimos una constante para guardar nuestro contexto
  const context = useContext(GlobalContext);

  // Devolvemos un error si el contexto no está definido
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }

  // retornamos el contexto
  return context;
};
