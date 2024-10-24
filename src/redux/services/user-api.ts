import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL as string;

const SHEET_API_GET = "https://sheetdb.io/api/v1";
const TOKEN = "wke7jgh4ftluv228g59zt05h6m4azd12aw424pho";

export const fetchData = createApi({
  reducerPath: "fetchData",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: SHEET_API_GET,
  }),
  endpoints: (builder) => ({
    fetchData: builder.mutation({
      query: () => ({
        url: "/wr2wqm8e1vz8r",
        method: "GET",
      }),
    }),
    postContactForm: builder.mutation({
      query: (body) => ({
        url: "/t9zoo2pur5132",
        method: "POST",
        body: {
          name: body.name,
          email: body.email,
          message: body.message,
        },
        headers: { Authorization: `Bearer ${TOKEN}` },
      }),
    }),
  }),
});

export const { useFetchDataMutation, usePostContactFormMutation } = fetchData;
