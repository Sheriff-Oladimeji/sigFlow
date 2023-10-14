import Image from "next/image";
import React from "react";
import sigflow from "public/sigflow.svg";
import { Login } from "@/components/Login";
const page = () => {
  return (
    <section className="w-full  ">
      <Image src={sigflow} alt="logo" className="ml-[5%] mt-8" />
      <section className=" w-[90%] sm:w-[65%] md:w-[50%] lg:w-[40%] xl:w-[35%] mx-auto mt-20">
        <main className="border border-[#E6E7EC] rounded-md flex flex-col  py-8">
          <div className="w-[90%] mx-auto ">
            <div className="flex flex-col items-center gap-2 mb-8">
              <h2 className="text-3xl text-dark font-semibold">
                Welcome back!
              </h2>
              <p>Sign in to access your account</p>
            </div>
            <Login />
            <p className="text-[#828282] font-semibold">OR</p>
            
          </div>
        </main>
      </section>
    </section>
  );
};

export default page;
