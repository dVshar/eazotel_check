import {createContext,useState} from 'react'

const AuthContext = createContext({});

export const AuthProvider = ({children})=>{
    const [auth,setAuth]= useState(false);
    const [webCards,setWebCards ]= useState([{}])
    const [step,Setstep]=useState(0)

    return (
        <AuthContext.Provider value ={{auth,setAuth,step,Setstep,webCards,setWebCards}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;  