import { useEffect } from "react";
import GoogleLoginButton from "../components/GoogleLoginButton"
import { UserAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { user } = UserAuth();
    const navigate = useNavigate();
    // console.log(user);

    useEffect(() => {
        if(user == null) {
            navigate('/login');
        } else {
            navigate('/');
        }
    }, [user, navigate]);

    return (
        <div>
            <h1>Login Page</h1>
            <GoogleLoginButton />
        </div>
    );
};

export default Login;