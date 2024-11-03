import { ReactNode } from "react";
import "./Button.css";

interface Props {
  children: ReactNode; // Proyeccion de contenido en el Button
  // Proyeccion de contenido es cuando un componente recibe un componente hijo y lo renderiza
  parentMethod: () => void;
}

interface ChildrenProps {
  children: ReactNode; // Proyeccion de contenido en el ColorRed
}

export const ColorRed = ({ children }: ChildrenProps) => {
  return <div className="color-red">{children} </div>; // Si el children es un componente, seria un ReactNode
};

export const Button = ({ children, parentMethod }: Props) => {
  return (
    <button className="custom-button" onClick={parentMethod}>
      {children}
    </button>
  );
};
