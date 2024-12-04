import { useContext, createContext, useState, ReactNode, useEffect } from "react";

type AuthContextData = {
  currentUser: string | null;
  updateUser: (data: string) => void;
  setCurrentUser: React.Dispatch<React.SetStateAction<string | null>>;
};

export const authContext = createContext<AuthContextData | undefined>(
  undefined
);

interface AuthContextProviderProps {
  children: ReactNode;
}

// provider
export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [currentUser, setCurrentUser] = useState<string | null>(
    JSON.parse(localStorage.getItem("user") || "null")
  );
  

  // set the current to the string data that is passed 
  const updateUser = (data: string) => {
    setCurrentUser(data);
  }


  // set it to local local storage and keep it updated everytime current user changes
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser))

  }, [currentUser])

  return (
    <authContext.Provider value={{ currentUser, setCurrentUser, updateUser }}>
      {children}
    </authContext.Provider>
  );
};



// consumer

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    throw new Error("useAuth must be within a provider");
  }
  return context;
};
