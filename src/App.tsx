import Layout from '@primelight-school/layout';
import './App.css';
import Provider from '@primelight-school/provider';
import AppRoutes from '@primelight-school/routes';
// import { LogOut } from './assets/svgs';

function App() {
  return (
    <>
      <Provider>
        <Layout>
          <AppRoutes />
        </Layout>
      </Provider>
    </>
  );
}

export default App;
