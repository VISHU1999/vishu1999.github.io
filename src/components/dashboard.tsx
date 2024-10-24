import React from "react";
import Hero from "../components/hero-section";
import FavouriteProjects from "./FavouriteProjects";
import LatestCode from "./LatestCode";
import { UserData } from "@/types";

export default function dashboard({ userData }: { userData: UserData }) {
  return (
    <div>
      <Hero userData={userData} />
      <FavouriteProjects userData={userData} />
      {userData?.repo && <LatestCode userData={userData} />}
    </div>
  );
}
