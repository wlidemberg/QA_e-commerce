import { createContext, useContext, useState } from "react";
import type{ User } from "../types/user";

type AuthContextType = {
    user: User | null
    login: () => void
    logout: () => void
    isAuthenticated:boolean
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({children}:{children: React.ReactNode}){
    const [user, setUser] = useState<User | null>(null)

    function login(){
        const fakeUser: User = {
            id:"1",
            name:"Berg Sousa",
            email:"berg@email.com"
        }

        setUser(fakeUser)
    }

    function logout(){
        setUser(null)
    }

    const isAuthenticated = !!user

    return(
        <AuthContext.Provider
            value={{ user, login, logout, isAuthenticated }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth(){
    const context = useContext(AuthContext);
    if(!context){
        throw new Error("useAuth must be used within AuthProvider")
    }
    return context
}