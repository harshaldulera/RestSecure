import React, { useEffect } from "react";
import GoogleButton from 'react-google-button';
import { UserAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const GoogleLoginButton = () => {
    const { googleSignIn, user } = UserAuth();
    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (user != null){
            navigate('/login');
        }
    }, [user, navigate]);

    return <GoogleButton onClick={handleGoogleSignIn} />;
}

export default GoogleLoginButton;