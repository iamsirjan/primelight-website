import './App.css';
import Provider from '@shangrila-cargo/provider';
import { LogOut } from './assets/svgs';

function App() {
  return (
    <>
      <Provider>
        <>
          <LogOut />
        </>
      </Provider>
    </>
  );
}

export default App;
