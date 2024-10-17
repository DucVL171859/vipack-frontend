import { lazy } from "react";
import Loadable from 'components/Loadable';

import Dashboard from "layout/Dashboard";
import ProtectedRoute from "components/ProtectedRoute";

const AdminPage = Loadable(lazy(() => import('pages/AdminPage')));
const BlogView = Loadable(lazy(() => import('pages/admin/blog/BlogView')));
const BlogManagement = Loadable(lazy(() => import('pages/admin/blog/BlogManagement')));
const OrderManagement = Loadable(lazy(() => import('pages/admin/order/OrderManagement')));

const AdminRoutes = {
    path: '/admin',
    element: <ProtectedRoute element={<Dashboard />} />,
    children: [
        {
            path: 'dashboard',
            element: <ProtectedRoute element={<AdminPage />} />
        },
        {
            path: 'orders',
            children: [
                {
                    path: '',
                    element: <ProtectedRoute element={<OrderManagement />} />
                },
                // {
                //     path: ':slug',
                //     element: <ProtectedRoute element={<BlogView />} />
                // }
            ]
        },
        {
            path: 'blogs',
            children: [
                {
                    path: '',
                    element: <ProtectedRoute element={<BlogManagement />} />
                },
                {
                    path: ':slug',
                    element: <ProtectedRoute element={<BlogView />} />
                }
            ]
        },
    ]
};

export default AdminRoutes;