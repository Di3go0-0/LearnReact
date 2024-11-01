import { AppForm, Button, ColorRed } from "./Components";
import "./App.css";

function App() {
  const submit = () => {
    console.log("summitted");
  };

  const handleClinck = () => {
    console.log("uy me clickio todo");
  };
  // Proyeccion de contenido en el Button,
  // Simplemente le pasamos parentMethod y el children
  // que Simplemente seria pasarle un componente hijo para que lo renderize
  return (
    <>
      {/* <Button parentMethod={handleClinck}> */}
      {/*   {/* <div>My Label</div> se podria hacer de esta manera, pero Vamos a usar al Children Button*/}
      {/* </Button> */}

      {/* La Logica del botton la tiene el botn, no el padre */}
      {/* La logica de lo que pasa cuando toco el boton es del padre */}
      <Button parentMethod={handleClinck}>
        <div>
          <ColorRed>
            <div>My Label</div>
          </ColorRed>
        </div>
      </Button>

      {/* La logica de lo que pasa cuando toco el boton es del padre */}
      {/* La logica del que hay en el formulario, como validarlo, etc. Es del Form */}
      <AppForm>
        <button type="submit" onClick={submit}></button>
      </AppForm>
    </>
  );
}

export default App;
