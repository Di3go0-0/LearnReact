import "./App.css";
import { AppForm, Button, ColorRed } from "./Components";
import { GlobalProvider } from "./Context";

function App() {
  const submit = () => {
    console.log("summitted");
  };

  const handleClinck = () => {
    console.log("uy me clickio todo");
  };

  const SeyHey = () => {
    alert("Heyyyyy!!!!");
  };
  return (
    // Tenemos que englobar nuestros componentes que puedan acceder al contexto
    // y le tenemos que decir que valor va a tener
    <GlobalProvider>
      <ColorRed>The Number is </ColorRed>

      <Button parentMethod={handleClinck}>Change Number</Button>

      <AppForm>
        <button type="submit" onClick={SeyHey}>
          heyyy
        </button>
      </AppForm>
    </GlobalProvider>
  );
}

export default App;
