import { ReactNode, useState } from "react";
import { GlobalContext } from "./Global.Context";

// Valor inicial
const EmptyGlobalState: number = 0;

// Interface de propiedades para el GlobalProvider
interface GlobalProps {
  // Proyeccion de contenido en el Global
  children: ReactNode;
}

// Componente para el contexto Global
export const GlobalProvider = ({ children }: GlobalProps) => {
  // Hook para manejar el estado {value} y el metodo {setValue} del contexto
  const [value, setValue] = useState<number>(EmptyGlobalState);

  // Devolvemos el contexto con el valor y el metodo
  return (
    <GlobalContext.Provider value={{ value, setValue }}>
      {/* definimos el children que seria el componente que se va a renderizar y usar el contexto */}
      {children}
    </GlobalContext.Provider>
  );
};
