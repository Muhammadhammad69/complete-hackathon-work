"use client";
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import {IUserContext, IUserData} from "../contextTypes"


const UserContext = createContext<IUserContext|undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState<IUserData | undefined>(undefined);
  const [isCheck, setIsCheck] = useState(true);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const loadUserData = () => setIsCheck(true);
  useEffect(() => {
    if (!isCheck) return;
    const getUserData = async () => {
      setIsLoading(true);
      try {
        const resp = await fetch("/api/verifytoken");
        const { data,success } = await resp.json();
        setUserData(data);
        setIsUserLoggedIn(success);
      } catch (error) {
        console.log(error);
      }
      setIsCheck(false);
      setIsLoading(false);
    };
    getUserData();
  },[isCheck]);
  return (
    <UserContext.Provider value={{ isLoading,userData,loadUserData,isUserLoggedIn }}>{children}</UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
