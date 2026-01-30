import { createContext, useContext, useState } from "react";
import type{ User } from "../types/user";

type AuthContextType = {
    user: User | null
    login: (email:string, password:string) => boolean;
    logout: () => void
    isAuthenticated:boolean
}

const AuthContext = createContext<AuthContextType | null>(null)

const fakeUsers= [
    {
        id:"1",
        name:"Berg Sousa",
        email:"berg@email.com",
        password:"123456"
    },
]

export function AuthProvider({children}:{children: React.ReactNode}){
    const [user, setUser] = useState<User | null>(null)

    function login(email:string, password:string){
        const found = fakeUsers.find(
            u => u.email === email && u.password === password
        )
        if(!found) return false;

        setUser({
            id:found.id,
            name:found.name,
            email:found.email
        });

        return true;
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