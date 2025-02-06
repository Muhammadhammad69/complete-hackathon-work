"use client";
import React from "react";
import { Login, Sigup } from "./auth";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useDialog } from "@/context/authDialogContext/dialogContext";


export const AuthDialog = () => {
  const { isOpen, dialogType, closeDialog, isLoggedIn } = useDialog();
  // console.log("isOpen",isOpen);
  return (
    <>
      {!isLoggedIn && (
        <Dialog open={isOpen} onOpenChange={closeDialog}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>
                {dialogType === "Login" ? "Login" : "Sign Up"}
              </DialogTitle>
              <DialogDescription>
                
              </DialogDescription>
            </DialogHeader>
            {dialogType === "Login" ? <Login /> : <Sigup />}
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};
