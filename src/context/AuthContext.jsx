import { createContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();

  const allowedUsers = [{email: 'RTC', password: 'abcd'}, {email: 'Arnau', password: 'abcd'}];

  const login = async (data) => {
    console.log(data);
    const userMatch = allowedUsers.find(
      (user) => user.email === data.email && user.password === data.password
    );
    if (userMatch) {
      setUser(userMatch);
      navigate("/", { replace: true });
    } else {
      window.alert("Incorrect user!");
    }
  };

  const logout = () => {
    setUser(null);
    navigate("/login", { replace: true });
  };

  const value = useMemo(() => ({ user, login, logout }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};
