import { Contador } from './components/Contador';
import { Funciones } from './typescript/Funciones';
import ObjetosLiterales from './typescript/ObjetosLiterales';
import { TiposBasicos } from './typescript/TiposBasicos';
import { ContadorConHook } from './components/ContadorConHook';

const App = () => {
  return (
    <div className="mt-2">
        <h1>Introduccion a TypeScript React</h1>
        <hr />
        {/* <TiposBasicos /> */}
        {/* <ObjetosLiterales /> */}
        {/* <Funciones /> */}
        {/* <Contador /> */}
        <ContadorConHook />
    </div>
  );
}

export default App;

