import LoginPage from "../Pages/LoginPage";
import ForgotPasswordPage from "../Pages/ForgotPasswordPage";
import AppLayout from "../Layout/AppLayout";
import Category from "../Pages/Product/Category";
import Product from "../Pages/Product/Product";
import Material from "../Pages/Purchase/Material";
import PurchaseInward from "../Pages/Purchase/PurchaseInward";
import PurchaseOrder from "../Pages/Purchase/PurchaseOrder";
import Quotation from "../Pages/Sales/Quotation";
import Proforma from "../Pages/Sales/Proforma";
import Order from "../Pages/Sales/Order";
import StockMaterial from "../Pages/Stock/StockMaterial";
import StockProduct from "../Pages/Stock/StockProduct";
import DashboardPage from "../Pages/Dashboard/DashboardPage";
import AppSetting from "../Pages/Setting/AppSetting";

export const allRoutes = [
    {
        index: true,
        element: <LoginPage />
    },
    {
        path: 'forgot-password',
        element: <ForgotPasswordPage />
    },
    {
        path: 'app',
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <DashboardPage />
            },
            {
                path: 'product',
                element: <Product />
            },
            {
                path: 'category',
                element: <Category />
            },
            {
                path: 'material',
                element: <Material />
            },
            {
                path: 'purchase-inward',
                element: <PurchaseInward />
            },
            {
                path: 'purchase-order',
                element: <PurchaseOrder />
            },
            {
                path: 'quotation',
                element: <Quotation />
            },
            {
                path: 'Proforma',
                element: <Proforma />
            },
            {
                path: 'order',
                element: <Order />
            },
            {
                path: 'stock-material',
                element: <StockMaterial />
            },
            {
                path: 'stock-product',
                element: <StockProduct />
            },
            {
                path: 'setting',
                element: <AppSetting />
            },
        ]
    }
]