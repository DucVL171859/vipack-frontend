import { createBrowserRouter } from 'react-router-dom';
import AdminRoutes from './AdminRoutes';
import HomeRoutes from './HomeRoutes';
import LoginRoutes from './LoginRoutes';
import RegisterRoutes from './RegisterRoutes';
import ShopRoutes from './ShopRoutes';
import BlogRoutes from './BlogRoutes';

const router = createBrowserRouter([
    AdminRoutes,
    HomeRoutes,
    LoginRoutes,
    RegisterRoutes,
    ShopRoutes,
    BlogRoutes,
], {
    basename: '/'
});

export default router;