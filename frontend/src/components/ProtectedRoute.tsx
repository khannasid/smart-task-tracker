import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";



interface ProtectedRouteProps{
    children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps): React.JSX.Element {
    const token = useAuth().token;
    const location = useLocation();

    if (!token) {
        return <Navigate to="/" state={{from: location}} replace />;
    }
    return <>{children}</>;
}