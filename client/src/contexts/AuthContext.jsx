import { useContext, createContext, useEffect, useState } from "react";
import {
    GoogleAuthProvider,
} from 'firebase/auth';

const AuthContext = createContext();

export const AuthContextProvider = () => {
    return (

    );
};

export const UserAuth = () => {
    return useContext(AuthContext);
};