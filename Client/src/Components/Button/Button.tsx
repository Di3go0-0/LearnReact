import { ReactNode } from "react";
import "./Button.css";
import { useGlobalContext } from "../../Context";

interface Props {
  children: ReactNode; // Proyeccion de contenido en el Button
  // Proyeccion de contenido es cuando un componente recibe un componente hijo y lo renderiza
  parentMethod: () => void;
}

interface ChildrenProps {
  children: ReactNode; // Proyeccion de contenido en el ColorRed
}

export const ColorRed = ({ children }: ChildrenProps) => {
  const { value } = useGlobalContext(); // Usamos el hook para obtener el valor del contexto

  return (
    <div className="color-red">
      {children} : {value}
    </div>
  ); // Si el children es un componente, seria un ReactNode
};

export const Button = ({ children, parentMethod }: Props) => {
  const { value, setValue } = useGlobalContext(); // Usamos el hook para enviar el valor al contexto
  const handleClinck = () => {
    if (value === 0) {
      setValue(10);
    } else {
      setValue(0);
    }

    console.log("Uy el Value acaba de cambiar");
    parentMethod();
  };
  return (
    <button className="custom-button" onClick={handleClinck}>
      {children}
    </button>
  );
};
