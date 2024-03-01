import React, { createContext, useEffect, useState } from 'react'


export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [appName, setappName] = useState("")
    
    return(
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
