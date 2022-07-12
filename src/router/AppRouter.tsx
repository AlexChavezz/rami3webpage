import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { AuthState } from "../interfaces/interfaces";
import { LoginScreen } from "../pages/LoginScreen";
import { auth as authSesion } from "../firebase/firebase.config";
import { ControllerScreeen } from "../pages/ControllerScreen";
import { HomeScreen } from "../pages/HomeScreen";

const initialState = {
    uid: "",
    email: "",
    isAuthentificated: false
};

export const AppRouter = () => {
    const [auth, setAuth] = useState<AuthState>(initialState);
    const { isAuthentificated } = auth;
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        onAuthStateChanged(authSesion, (user) => {
            if (!user) {
                setLoading(false);
                return;
            }
            const { email, uid } = user;
            setAuth({ email, uid, isAuthentificated: true })
            setLoading(false);
        })
    }, [])
    if (loading) {
        return (
            <div className="lds-heart"><div></div></div>
        );
    }
    return (
        <AuthContext.Provider value={{
            auth,
            setAuth
        }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/auth" element={

                        isAuthentificated ?
                            <Navigate to="/controllers" />
                            :
                            <LoginScreen />
                    } />
                    <Route path="/controllers" element={
                        isAuthentificated ?
                            <ControllerScreeen />
                            :
                            <Navigate to="/auth" />
                    } />
                </Routes>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}