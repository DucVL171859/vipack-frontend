import { lazy } from "react";
import Loadable from 'components/Loadable';

const HomePage = Loadable(lazy(() => import('pages/HomePage')));
const OrderProduct = Loadable(lazy(() => import('pages/home-order/OrderProductPage')));
const OrderTrackingPage = Loadable(lazy(() => import('pages/home-order/OrderTrackingPage')));

const HomeRoutes = {
    path: '/',
    children: [
        {
            path: '',
            element: <HomePage />
        },
        {
            path: 'order-product',
            element: <OrderProduct />
        },
        {
            path: 'order-tracking',
            element: <OrderTrackingPage />
        }
    ]
}

export default HomeRoutes;