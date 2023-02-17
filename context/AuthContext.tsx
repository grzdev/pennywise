import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup } from 'firebase/auth'
import { auth } from "config/firebase";
import { GoogleAuthProvider } from 'firebase/auth'

const AuthContext = createContext<any>({})

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({
    children
} : {
    children: React.ReactNode
}) => {
    const [user, setUser] = useState<any>(null)
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider()

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            if(user){
                setUser({
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName
                })
            }else{
                setUser(null)
            }
            setLoading(false)

            return () => unsubscribe()
        })
    },[])

    const signup = (email: string, password: string) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIWithGoogle = () => {
        signInWithPopup(auth, provider)
    }

    const login = (email: string, password: string) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = async () => {
        setUser(null)
        await signOut(auth)
    }

     return (
        <AuthContext.Provider value={{ user, signup, login, logout, signIWithGoogle }}>
            {loading ? null : children} 
        </AuthContext.Provider>
     )
}