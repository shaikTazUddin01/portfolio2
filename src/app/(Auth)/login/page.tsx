"use client";
import PForm from "@/components/Form/PFrom";
import PInput from "@/components/Form/PInput";
import { BackgroundBeams } from "@/components/ui/Background";
import { useLoginMutation } from "@/redux/feature/Auth/authApi";
import { authInfo } from "@/redux/feature/Auth/authslice";
import { useAppDispatch } from "@/redux/hooks";
import { Button } from "@nextui-org/react";
import { jwtDecode } from "jwt-decode";
import React from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const Login = () => {
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const handleLogin: SubmitHandler<FieldValues> = async (data) => {
    const id = toast.loading("loading...");
    try {
      const loginInfo = {
        email: data?.email,
        password: data?.password,
      };
      const res = await login(loginInfo);
      console.log(res);
      if (res?.data) {
        const { accessToken } = res?.data?.data;

        if (accessToken) {
          const currentUser = await jwtDecode(accessToken);
          dispatch(authInfo({ data: currentUser, token:accessToken }));
          document.cookie = `accessToken=${accessToken};path=/;SameSite=Strict`;
        }

        toast.success("login Success", { id: id });
      } else {
        toast.error(res?.data?.error);
      }
    } catch (error: any) {
      toast.error(error?.message);
    }
  };
  return (
    <div className="bg-[#111111] min-h-screen">
      <div className="max-w-6xl mx-auto text-default-100 flex justify-center items-center min-h-screen ">
        <div className="bg-[#060606d6] p-5 rounded-xl w-[35%] z-50 border border-primaryColor shadow-xl">
          <h1 className="text-center text-2xl mb-2">
            Login With Your Information
          </h1>
          <PForm onSubmit={handleLogin}>
            <div className="mb-2">
              <PInput name="email" label="Email" />
            </div>
            <div className="mb-2">
              <PInput
                name="current-password"
                label="Password"
                type="password"
              />
            </div>
            <div className="mb-2">
              <Button
                type="submit"
                className="w-full bg-primaryColor text-white font-medium text-lg"
              >
                Login
              </Button>
            </div>
          </PForm>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default Login;
