import { lazy } from "react";
import Loadable from 'components/Loadable';

const ShopPage = Loadable(lazy(() => import('pages/ShopPage')));

const ShopRoutes = {
    path: '/shop',
    element: <ShopPage />
}

export default ShopRoutes;