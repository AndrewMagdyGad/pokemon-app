import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PrivateRoute({ children }) {
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/");
        }
    }, []);

    return <>{children}</>;
}

export default PrivateRoute;
