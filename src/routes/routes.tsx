import { Routes } from '@primelight-school/routes/route.constant';
import Home from '@primelight-school/feature/Home';
import About from '@primelight-school/feature/About';

export const allRoutes = [
  {
    path: Routes.generateFullPath('LANDING'),
    element: <Home />,
  },
  {
    path: Routes.generateFullPath('ABOUT'),
    element: <About />,
  },
];
