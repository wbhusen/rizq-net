import Index from './Routes/Index';
import { PrimeReactProvider } from 'primereact/api';

function App() {
  return (
    <>
     <PrimeReactProvider>
      <Index />
     </PrimeReactProvider>
    </>
  );
}

export default App;