"use client";

import React from "react";
import Dashboard from "@/components/dashboard";
import Navbar from "@/components/nav-bar";
import Footer from "@/components/Footer";
import Error from "../app/error";
import Loader from "../app/loader";
import useUserData from "@/custom-hooks/user-hook";

export default function Home() {
  const { userDetails, responseData } = useUserData();

  return (
    <main className="bg-white dark:bg-gray-800 w-full">
      {responseData.isLoading && <Loader />}
      {responseData.isError && userDetails == undefined && <Error />}
      {userDetails.userData && (
        <>
          <Dashboard userData={userDetails?.userData} />
        </>
      )}
    </main>
  );
}
