import "./App.css";
import { Modal } from "./Components";
import { useModalContext } from "./Components/Modal/context/ModalContext";

function App() {
  const { setState } = useModalContext();

  const openModel = () => {
    setState(true);
  };

  return (
    <>
      <Modal>
        <h2>Modal</h2>
        <h3>Click outside to close</h3>
      </Modal>
      <button onClick={openModel}>Open sesamo</button>
    </>
  );
}

export default App;
