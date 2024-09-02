import { allRoutes } from '@primelight-school/routes/routes';
import { useRoutes } from 'react-router-dom';

const AppRoutes = () => {
  const element = useRoutes(allRoutes);
  return element;
};

export default AppRoutes;
