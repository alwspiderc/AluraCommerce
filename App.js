import Rotas from "./src/rotas";
import { TemaProvider } from "./src/context/TemaContext";

export default function App() {
  return (
    <TemaProvider>
      <Rotas />
    </TemaProvider>
  );
}