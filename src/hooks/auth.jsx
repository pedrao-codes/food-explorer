import Cookies from "js-cookie"

import { createContext, useContext, useState } from "react"
import { api } from "../services/api"

import { useEffect } from "react"

export const AuthContext = createContext({})

function AuthProvider({children}) {
    const [data, setData] = useState("")

    async function signIn({email, password}) {
        try {
            const response = await api.post("/sessions", { email, password })
            const { user, token } = response.data

            api.defaults.headers.authorization = `Bearer ${token}`

            Cookies.set("@food-explorer:user", JSON.stringify(user), {expires: 1})
            Cookies.set("@food-explorer:token", token, {expires: 1})

            setData({user, token})
        } catch(error) {
            if(error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possível entrar")
            }
        }
    }

    useEffect(() => {
        const token = Cookies.get("@food-explorer:token")
        const user = Cookies.get("@food-explorer:user")
    
        if (token && user) {
          api.defaults.headers.authorization = `Bearer ${token}`
    
          setData({
            token,
            user: JSON.parse(user)
          })
        }
      }, [])

    return(
        <AuthContext.Provider value={{signIn, user: data.user}}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context  = useContext(AuthContext)
    return context
}

export { AuthProvider, useAuth }