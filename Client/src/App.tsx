import "./App.css";
import { useFetch } from "./Hooks";

const url = "https://api.example.com/data";

interface Data {
  name: string;
  lastName: string;
  age: number;
}

function App() {
  // AL useFetch le pasamos nuestro tipo de dato el { Generico }
  const { data, loading, error } = useFetch<Data>(url);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return <div>{JSON.stringify(data)}</div>;
}

export default App;
