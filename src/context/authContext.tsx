import { useContext, createContext, useState, ReactNode } from "react";


type AuthContextData = {
    currentUser: string;
    setCurrentUser: React.Dispatch<React.SetStateAction<string>>

}

export const authContext = createContext<AuthContextData | undefined>(undefined);

interface AuthContextProviderProps {
    children: ReactNode;
}

// provider
export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({children}) => {
  const [currentUser, setCurrentUser] = useState<string>("");

  return (
    <authContext.Provider value={{currentUser, setCurrentUser}}>
        {children}
    </authContext.Provider>
  )

};

// consumer 

export const useAuth = () => {
    const context = useContext(authContext);
    if(!context) {
        throw new Error ("useAuth must be within a provider")
    }
    return context;
}

