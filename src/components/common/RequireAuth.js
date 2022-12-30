import useAuthStore from "../../storages/AuthStore";
import { Navigate } from "react-router-dom";


export default function RequireAuth({ children }) {
    const { trackingID, referenceID } = useAuthStore();

    return (trackingID!="" && referenceID!="") ? children : <Navigate to="/" replace />;
}
