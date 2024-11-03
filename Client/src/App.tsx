import { AppForm, Button, ColorRed } from "./Components";
import "./App.css";

function App() {
  const submit = () => {
    console.log("summitted");
  };

  const handleClinck = () => {
    console.log("uy me clickio todo");
  };

  const SeyHey = () => {
    alert("Heyyyyy!!!!11");
  };
  // Proyeccion de contenido en el Button,
  // Simplemente le pasamos parentMethod y el children
  // que Simplemente seria pasarle un componente hijo para que lo renderize
  return (
    <>
      {/* La Logica del botton la tiene el botn, no el padre */}
      {/* La logica de lo que pasa cuando toco el boton es del padre */}
      <Button parentMethod={handleClinck}>Hollalalallals</Button>

      <ColorRed>
        <Button parentMethod={SeyHey}>mi boton rojo</Button>
      </ColorRed>

      {/* La logica de lo que pasa cuando toco el boton es del padre */}
      {/* La logica del que hay en el formulario, como validarlo, etc. Es del Form */}
      <AppForm>
        <button type="submit" onClick={submit}>
          heyyy
        </button>
      </AppForm>
    </>
  );
}

export default App;
