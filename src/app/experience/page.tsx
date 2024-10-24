// @flow
"use client";

import React from "react";
import Experience from "@/components/Experience";
import useUserData from "@/custom-hooks/user-hook";
import Loader from "../../app/loader";
import Error from "@/app/error";
type Props = {};
export default function Page(props: Props) {
  const { userDetails, responseData } = useUserData();

  return (
    <>
      {responseData.isLoading && <Loader />}
      {userDetails && <Experience />}
      {responseData.isError && userDetails == undefined && <Error />}
    </>
  );
}
