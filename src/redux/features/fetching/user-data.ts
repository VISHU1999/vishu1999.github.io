import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import RootData, {
  Experience,
  About,
  Project,
  UserData,
  SocialLinks,
} from "@/types";

type UserStateType = {
  userData: UserData | null;
  about: About | null;
  experience: Experience[] | null;
  project: Project[] | null;
  socialLinks: SocialLinks | null;
};

const initialState: UserStateType = {
  userData: null,
  about: null,
  experience: null,
  project: null,
  socialLinks: null,
};

export const fetchUserSlice = createSlice({
  name: "fetch",
  initialState,
  reducers: {
    userSetData: (state, action: PayloadAction<RootData>) => {
      state.userData = action.payload.userData;
      state.about = action.payload.userData.about;
      state.experience = action.payload.userData.experience;
      state.project = action.payload.userData.projects;
      state.socialLinks = action.payload.userData.socialLinks;
    },
  },
});

export const { userSetData } = fetchUserSlice.actions;
export default fetchUserSlice.reducer;
