import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Category } from "../../model/category.model";

const baseURI = "http://localhost:3000";

export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseURI }),
  tagTypes: ["categories"],
  endpoints: (builder) => ({
    //@GET Categories
    getCategories: builder.query<Category[], void>({
      query: () => "/api/category",
      providesTags: ["categories"],
    }),

    //@POST
    createCategory: builder.mutation<Category, string>({
      query: (name) => ({
        url: "/api/category/create",
        method: "POST",
        body: { name },
      }),
      invalidatesTags: ["categories"],
    }),

    //@GET ONE
    getCategory: builder.query<Category, string>({
      query: (id) => `/api/category/${id}`,
      providesTags: ["categories"],
    }),

    //@DELETE
    deleteCategory: builder.mutation<Category, string>({
      query: (id) => ({
        url: `/api/category/${id}`,
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: ["categories"],
    }),

    //@UPDATE
    updateCategory: builder.mutation<void, Category>({
      query: ({id, name}) => ({
        url: `/api/category/${id}`,
        method: "PUT",
        body: { name },
      }),
      invalidatesTags: ["categories"],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
  useGetCategoryQuery,
  useUpdateCategoryMutation
} = categoriesApi;
