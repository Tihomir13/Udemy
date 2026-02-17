import CoreConcepts from './components/CoreConcepts/CoreConcepts.jsx';
import Examples from './components/Examples/Examples.jsx';
import Header from './components/Header/Header.jsx';
import { EXAMPLES } from './data.js';

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
