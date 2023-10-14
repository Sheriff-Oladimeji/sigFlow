import Image from "next/image";
import React from "react";
import sigflow from "public/sigflow.svg";
import { Login } from "@/components/Login";
const page = () => {
  return (
    <section>
      <Image src={sigflow} alt="logo" />x{" "}
      <section className="flex justify-center items-center h-screen">
        <main className="border border-[#E6E7EC] rounded-md">
          <div className="w-[90%] mx-auto ">
            <div>
              <h2 className="text-xl text-dark font-semibold">Welcome back!</h2>
              <p>Sign in to access your account</p>
            </div>
            <Login/>
          </div>
        </main>
      </section>
    </section>
  );
};

export default page;
