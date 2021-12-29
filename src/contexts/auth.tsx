import { useState } from "react";
import { createContext, ReactNode, useEffect } from "react";
import { api } from "../services/api";


export const AuthContext = createContext({} as AuthContextData)

type User = {
    id: string;
    name: string;
    login: string;
    avat_url: string
}

type AuthContextData = {
    user: User | null;
    signInUrl: string;
}

type AuthResponse = {
    token: string;
    user: {
        id: string;
        avat_url: string;
        name: string;
        login: string;
    }
}

type AuthProvider = {
    children: ReactNode
}

export function AuthProvider(props: AuthProvider){
    const [user, setUser] = useState<User | null>(null)

    const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=f78b173c3922b4390349`

    async function signIn(githubCode: string){
        const response = await api.post<AuthResponse>('authenticate', {
            code: githubCode
        })

        const {token, user} = response.data

        localStorage.setItem('@dowhile:token', token)

        setUser(user)   
    }

    useEffect(() => {
        const token = localStorage.getItem('@dowhile:token')

        if(token){
            api.defaults.headers.common.authorization = `Bearer ${token}`

            api.get<User>('profile').then(res => {
                setUser(res.data)
            })
        }
    }, [])

    useEffect(() => {
        const url = window.location.href;
        const hasGithubCode = url.includes('?code=')

        if(hasGithubCode){
            const [urlWithoutCode, githubCode] = url.split('?code=')

            console.log({urlWithoutCode, githubCode})
            window.history.pushState({}, '', urlWithoutCode)

            signIn(githubCode)
        }
    }, [])
 
    return (
        <AuthContext.Provider value={{ signInUrl, user }}>
            {props.children}
        </AuthContext.Provider>
    )
}

