import { createBrowserRouter } from "react-router-dom";
import "./index.css";
import { RouterProvider } from "react-router";
import AuthLayout from "./components/auth/layout";
import AdminLayout from "./components/admin-view/layout";
import ShoppingLayout from "./components/shopping-view/layout";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import Dashboard from "./pages/admin-view/Dashboard";
import Products from "./pages/admin-view/Products";
import Orders from "./pages/admin-view/Orders";
import Features from "./pages/admin-view/Features";

import Home from "./pages/shopping-view/Home";
import ProductListing from "./pages/shopping-view/ProductListing";
import CheckOut from "./pages/shopping-view/CheckOut";
import Account from "./pages/shopping-view/Account";

import NotFound from "./pages/not-found";
import CheckAuth from "./components/common/CheckAuth";
import UnauthPage from "./pages/unauthPage";

const App = () => {
  const isAuthentication = false;
  const user = null;

  const router = createBrowserRouter([
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
      ],
    },
    {
      path: "/admin",
      element: (
        <CheckAuth isAuthentication={isAuthentication} user={user}>
          <AdminLayout />
        </CheckAuth>
      ),
      children: [
        { path: "dashboard", element: <Dashboard /> },
        { path: "products", element: <Products /> },
        { path: "orders", element: <Orders /> },
        { path: "features", element: <Features /> },
      ],
    },
    {
      path: "/shop",
      element: (
        <CheckAuth isAuthentication={isAuthentication} user={user}>
          <ShoppingLayout />
        </CheckAuth>
      ),
      children: [
        { path: "home", element: <Home /> },
        { path: "product-listing", element: <ProductListing /> },
        { path: "check-out", element: <CheckOut /> },
        { path: "account", element: <Account /> },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/unauth-page",
      element: <UnauthPage />
    }
  ]);

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
