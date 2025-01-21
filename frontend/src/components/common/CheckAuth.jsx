import { Navigate, useLocation } from "react-router-dom";

const CheckAuth = ({ isAuthentication, user, children }) => {
  const location = useLocation();
  const isAuthPage = location.pathname.includes("/login") || location.pathname.includes("/register");
  const isAdminPage = location.pathname.includes("admin");
  const isShopPage = location.pathname.includes("shop");

  // Redirect unauthenticated users to login, except when already on auth pages
  if (!isAuthentication && !isAuthPage) return <Navigate to="/auth/login" />;

  // Redirect authenticated users away from auth pages to their respective dashboards
  if (isAuthentication && isAuthPage) {

    const targetPath = user?.role === "admin" ? "/admin/dashboard" : "/shop/home";
    return <Navigate to={targetPath} replace />;
  } else {
    console.log("Conditions not met for redirection. isAuthentication:", isAuthentication, "isAuthPage:", isAuthPage);
  }

  // Prevent non-admin users from accessing admin pages
  if (isAuthentication && user?.role !== "admin" && isAdminPage) {
    return <Navigate to="/unauth-page" />;
  }

  // Prevent admin users from accessing shop-specific pages
  if (isAuthentication && user?.role === "admin" && isShopPage) {
    return <Navigate to="/admin/dashboard" />;
  }

  // Render children for all valid scenarios
  return <>{children}</>;
};

export default CheckAuth;
