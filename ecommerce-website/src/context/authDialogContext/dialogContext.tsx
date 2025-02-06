// context/DialogContext.tsx
"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { IDialogContextType, DialogType } from "@/context/contextTypes";
const DialogContext = createContext<IDialogContextType>({
  isOpen: false,
  openDialog: () => {},
  closeDialog: () => {},
  checkTokenFunc: () => {},
  dialogType: "Login",
  isLoggedIn: false,
});

export const DialogProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dialogType, setDialogType] = useState<DialogType>("Login");
  const [checkToken, setCheckToken] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const openDialog = (type: DialogType) => {
    setDialogType(type);
    setIsOpen(true);
  };
  const closeDialog = () => setIsOpen(false);
  const checkTokenFunc = () => setCheckToken(true);
  useEffect(() => {
    if(!checkToken) return;
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/verifytoken", { cache: "no-store" });
        const data = await res.json();
        setIsLoggedIn(data.success);
      } catch (error) {
        console.log(error);
        setIsLoggedIn(false);
      }
      setCheckToken(false);
    };
    checkAuth();
  },[checkToken]);
  return (
    <DialogContext.Provider
      value={{ isOpen, openDialog, closeDialog, dialogType, isLoggedIn, checkTokenFunc }}
    >
      {children}
    </DialogContext.Provider>
  );
};

export const useDialog = () => useContext(DialogContext);
