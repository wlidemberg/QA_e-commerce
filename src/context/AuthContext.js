import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState } from "react";
const AuthContext = createContext(null);
const fakeUsers = [
    {
        id: "1",
        name: "Berg Sousa",
        email: "berg@email.com",
        password: "123456"
    },
];
export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    function login(email, password) {
        const found = fakeUsers.find(u => u.email === email && u.password === password);
        if (!found)
            return false;
        setUser({
            id: found.id,
            name: found.name,
            email: found.email
        });
        return true;
    }
    function logout() {
        setUser(null);
    }
    const isAuthenticated = !!user;
    return (_jsx(AuthContext.Provider, { value: { user, login, logout, isAuthenticated }, children: children }));
}
export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within AuthProvider");
    }
    return context;
}
