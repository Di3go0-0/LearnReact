import "./Button.css";

interface Props {
  label: string;
  parentMethod: () => void;
}

export const Button = ({ label, parentMethod }: Props) => {
  return (
    // Cuando haya un metodo usalo
    <button className="custom-button" onClick={parentMethod}>
      {label}
    </button>
    // Cada vez que hagas click crea un nuevo metodo y ejecutalo $[NO RECOMENDADO]
    // <button className="custom-button" onClick={() => parentMethod()}>
    //   {label}
    // </button>
  );
};
