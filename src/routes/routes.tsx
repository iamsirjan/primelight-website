import { Routes } from '@primelight-school/routes/route.constant';
import Home from '@primelight-school/feature/Home';

export const allRoutes = [
  {
    path: Routes.generateFullPath('LANDING'),
    element: <Home />,
  },
];
