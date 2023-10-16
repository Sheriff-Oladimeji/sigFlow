import Image from "next/image";
import React from "react";
import sigflow from "public/Sigflow.svg";
import { Login } from "@/components/Login";
import github from "public/github.svg"
import google from "public/google.svg"
import key from "public/key-01.svg"
import Link from "next/link";
const page = () => {
  return (
    <section className="w-full  ">
      <Image src={sigflow} alt="logo" className="ml-[5%] mt-8" />
      <section className=" w-[90%] sm:w-[65%] md:w-[55%] lg:w-[45%] xl:w-[35%] mx-auto my-12">
        <main className="border border-[#E6E7EC] rounded-md flex flex-col  py-8">
          <div className="w-[90%] mx-auto ">
            <div className="flex flex-col items-center gap-2 mb-8">
              <h2 className="text-3xl text-dark font-semibold">
                Welcome back!
              </h2>
              <p>Sign in to access your account</p>
            </div>
            <Login />
            <p className="text-[#828282] font-semibold text-center mb-4">OR</p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <p className="flex gap-4 border   border-gray-300 rounded-lg items-center p-2">
                <span className="text-sm">Sign in with Github</span>
                <Image src={github} alt="" />
              </p>
              <p className="flex  gap-4 border  border-gray-300 rounded-lg items-center p-2">
                <span className="text-sm">Sign in with Google</span>
                <Image src={google} alt="" />
              </p>
            </div>
            <div className="flex flex-col items-center mt-4">
              <p className="flex gap-4 border   border-gray-300 rounded-lg items-center p-2">
                <span className="text-sm">Sign in with SS0</span>
                <Image src={key} alt="" />
              </p>
            </div>
          </div>
        </main>
        <span className="text-dark flex justify-center items-center gap-1 mt-3">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-green font-semibold">
            Sign Up
          </Link>
        </span>
      </section>
    </section>
  );
};

export default page;
