// @flow
"use client";
import AboutMe from "@/components/AboutMe";
import useUserData from "@/custom-hooks/user-hook";
import React from "react";
import Loader from "../../app/loader";
import Error from "../../app/error";

type Props = {};
export default function Page(props: Props) {
  const { userDetails, responseData } = useUserData();

  return (
    <>
      {responseData.isLoading && <Loader />}
      {userDetails && <AboutMe />}
      {responseData.isError && userDetails == undefined && <Error />}
    </>
  );
}
