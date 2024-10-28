import { createContext, useState, useContext, useEffect } from "react";
import { registerUser, loginUser, verifyToken } from "../services/authApi";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";

export const AuthContext = createContext();

//Create a hook
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const signUp = async (data) => {
    try {
      const user = await registerUser(data);
      setUser(user);
      setIsAuthenticated(true);
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  const signIn = async (data) => {
    try {
      const user = await loginUser(data);
      setUser(user);
      setIsAuthenticated(true);
      navigate('/')
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function checkLogin() {
      const cookies = Cookies.get();

      if (!cookies.token) {
        console.log("No token found");
        setIsAuthenticated(false);
        return setUser(null);
      }

      try {
        const response = await verifyToken(cookies.token);
        if (!response) {
          console.log(response)
          console.log("No token found")
          setIsAuthenticated(false);
          setLoading(false);
          return;
        }
        setIsAuthenticated(true);
        console.log(response)
        setUser(response);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setIsAuthenticated(false);
        setUser(null);
        setLoading(false);
      }
    }

    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signUp,
        signIn,
        isAuthenticated,
        errors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
