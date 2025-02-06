"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {Input} from "@/components/ui/input"
import {useUserContext} from "@/context/userContext/usercontext"
import {IUserContext} from "@/context/contextTypes"
export const ProfilePage = () => {
  const {userData} = useUserContext() as IUserContext;
//   const {name, email} = userData
const name = userData?.name || "";
const email = userData?.email || "";
  // console.log("userProfileData", userData?.name, "email", userData?.email);
    return (
  <div className="w-[95%] 2xl:w-[1400px] mx-auto min-h-screen">
    <div className="w-full max-w-[80%] mx-auto shadow-lg p-4 rounded-lg  flex flex-col justify-center">
        <div>
            <Button>Edit</Button>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-8 w-full">
            <div className="">
            <Label htmlFor="name" className="text-[16px]">Name</Label>
            <Input id="name" type="text" value={name} disabled />
            </div>
            <div className="">
            <Label htmlFor="email" className="text-[16px]">Email</Label>
            <Input id="email" type="email" value={email} disabled/>
            </div>
        </div>
    </div>
  </div>);
};
