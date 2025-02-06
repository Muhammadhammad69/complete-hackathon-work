"use client";
import { User } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useDialog } from "@/context/authDialogContext/dialogContext";
import toast from "react-hot-toast";

export function DropdownMenuDemo() {
  const [open, setOpen] = useState(false);
  const { openDialog, isLoggedIn,checkTokenFunc } = useDialog();
  const logoutHandler = () => {
      fetch("/api/logout").then((res) =>{
            return res.json();
      }).then((data)=> {
       toast.success(data.message);
       checkTokenFunc();
      }).catch((error) => {
        // toast.error(error.message);
      })
  }
  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild onMouseEnter={() => setOpen(true)}>
        <User className="hover:text-black cursor-pointer stroke-2 " size={26} />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-52 mr-6"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {isLoggedIn === false ? (
            <>
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => openDialog("Login")}
              >
                Login
                <DropdownMenuShortcut>⇧⌘L</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => openDialog("signUp")}
              >
                Signup
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
            </>
          ) : (
            <Link href="/user/profile">
           
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => openDialog("signUp")}
            >
              Profile
              <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
             </Link>
          )}
        </DropdownMenuGroup>
        {isLoggedIn && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer" 
            onClick={logoutHandler}
            >
              Log out
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
