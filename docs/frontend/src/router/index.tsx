import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import DocPage from '../pages/DocPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/introduction/:pageId',
    element: <DocPage />,
  },
]);
