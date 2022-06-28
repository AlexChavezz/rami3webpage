import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { AuthState } from "../interfaces/interfaces";
import { LoginScreen } from "../pages/LoginScreen";


const initialState = {
    uid: "",
    email: "",
    isAuthentificated: false
};

export const AppRouter = () => {
    const [auth, setAuth] = useState<AuthState>(initialState);
    const { isAuthentificated } = auth;
    console.log(auth)
    return (
        <AuthContext.Provider value={{
            auth,
            setAuth
        }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<h1>Home page</h1>} />
                    <Route path="/login" element={

                        isAuthentificated ?
                            <Navigate to="/controllers" />
                            :
                            <LoginScreen />
                    } />
                    <Route path="/controllers" element={
                        isAuthentificated ?
                            <p>Access Success</p>
                            :
                            <Navigate to="/login" />
                    } />
                </Routes>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}