import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const isAuth = !!localStorage.getItem("token");

  return isAuth ? <>{children}</> : <Navigate to="/login" />;
}
