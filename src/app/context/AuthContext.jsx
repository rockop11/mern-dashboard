"use client"

import { createContext, useState } from "react";
import { useRouter } from "next/navigation";
import { decodeToken } from "react-jwt";
import { login } from "../services/authServices";

const AuthContext = createContext({
    loginHandler: () => { },
    logout: () => { },
});

export const AuthContextProvider = ({ children }) => {
    const router = useRouter()

    const loginHandler = async (email, password) => {
        const { token, urlImage, errors } = await login(email, password)
        if (token) {
            localStorage.setItem('token', JSON.stringify(token))
            const decodedToken = decodeToken(token)
            const { user } = decodedToken
            localStorage.setItem('user', JSON.stringify({ ...user, urlImage }))
            router.push("/")
        } else {
            return errors
        }
    }

    const logout = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        router.push("/login")
    }

    const context = {
        loginHandler,
        logout,
    }

    return (
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext
