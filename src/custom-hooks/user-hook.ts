// useUserData.js
import { useEffect } from "react";
import { useFetchDataMutation } from "@/redux/services/user-api";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { userSetData } from "@/redux/features/fetching/user-data";
import { userData as demoData } from "@/constants/data"; // Import your demo data
import { UserData, About, Experience, Project, SocialLinks } from "@/types";

const useUserData = () => {
  const [makeFetchRequest, responseData] = useFetchDataMutation();
  const dispatch = useAppDispatch();
  const userDetails = useAppSelector(
    (state: {
      UserReducer: {
        userData: UserData | null;
        about: About | null;
        experience: Experience[] | null;
        project: Project[] | null;
        socialLinks: SocialLinks | null;
      };
    }) => state.UserReducer
  );

  useEffect(() => {
    if (responseData.isSuccess) {
      const parseData = JSON.parse(responseData.data[0]["UserData"]);
      dispatch(userSetData(parseData));
    }
    if (responseData.isError) {
      dispatch(userSetData({ userData: demoData }));
    }
  }, [
    responseData.isSuccess,
    responseData.isError,
    dispatch,
    responseData.data,
  ]);

  useEffect(() => {
    if (userDetails.userData == undefined) {
      makeFetchRequest("");
    }
  }, []);

  return {
    userDetails,
    responseData,
  };
};

export default useUserData;
