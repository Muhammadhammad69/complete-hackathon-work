"use client";
import React, { useState, useEffect } from "react";
import { LoginSchema, signUpSchema, LoginData, SignUpData } from "./authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useDialog } from "@/context/authDialogContext/dialogContext";
import { Eye, EyeOff } from "lucide-react";
import { MiniLoader } from "@/components/loaders/loader";
import toast from "react-hot-toast";
import {useUserContext} from "@/context/userContext/usercontext";
import {IUserContext} from "@/context/contextTypes"
export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState<LoginData>();
  const [isSendData, setIsSendData] = useState(false);
  const { openDialog, closeDialog, checkTokenFunc } = useDialog();
  const {loadUserData} = useUserContext() as IUserContext;
  const form = useForm<LoginData>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  function onSubmit(values: LoginData) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // console.log("Login Data", values);
    setLoginData(values);
    setIsSendData(true);
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!isSendData) return;
    const sendData = async () => {
      try {
        const response = await fetch("/api/login", {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData),
        });
        const data = await response.json();
        setIsSendData(false);
        if (!response.ok) {
          // console.log("Some Thing Went Wrong", data.message);
          toast.error(data.message);
          return;
        }
        // console.log("resp", data.message);
        closeDialog();
        checkTokenFunc();
        toast.success('Login Successfuly')
        loadUserData();
      } catch (error) {
        console.log("error", error);
        setIsSendData(false);
      }
    };
    sendData();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSendData]);
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter Your Email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter Your Password"
                      autoComplete="off"
                      {...field}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center gap-4 justify-between">
            <p className=" text-sm self-center flex items-center gap-2">
              Don&apos;t have an account?
              <button
                type="button"
                onClick={() => openDialog("signUp")}
                className="text-blue-500 underline "
              >
                Sign Up
              </button>
            </p>
            <Button type="submit" disabled={isSendData ? true : false}>
              {isSendData && <MiniLoader />}
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export const Sigup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [signUpData, setSignUpData] = useState<SignUpData>();
  const [isSendData, setIsSendData] = useState(false);
  const { openDialog } = useDialog();
  const form = useForm<SignUpData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: SignUpData) => {
    // console.log("Sign Up Data:", data);
    setSignUpData(data);
    // API call for Sign Up here
    setIsSendData(true);
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!isSendData) return;
    const sendData = async () => {
      try {
        const resp = await fetch("/api/signup", {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(signUpData),
        });
        const data = await resp.json();
        setIsSendData(false);
        if (!resp.ok) {
          // console.log("Some Thing Went Wrong", data.message);
          toast.error(data.message);
          return;
        }
        // console.log("resp", data.message);
        openDialog("Login");
        toast.success(data.message);
      } catch (error) {
        console.log("error", error);
        
      }

      setIsSendData(false);
    };
    sendData();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSendData]);
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      autoComplete="off"
                      {...field}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center gap-4 justify-between">
            <p className=" text-sm self-center flex items-center gap-2">
              Already have an account?
              <button
                type="button"
                onClick={() => openDialog("Login")}
                className="text-blue-500 underline "
              >
                Login
              </button>
            </p>
            <Button type="submit" disabled={isSendData ? true : false}>
              {isSendData && <MiniLoader />}
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
