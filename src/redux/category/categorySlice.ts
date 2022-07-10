import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseURI = "http://localhost:3000";

type CategoryTpes = {
  id: string;
  name: string;
};

export const categorySlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: baseURI }),
  tagTypes: ["categories"],
  endpoints: (builder) => ({
    // @GET ALL
    getCategories: builder.query<CategoryTpes, void>({
      query: () => "/api/category",
      providesTags: ["categories"],
    }),

    // @POST
    createCategory: builder.mutation({
      query: (data) => ({
        url: "/api/category/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["categories"],
    }),
  }),
});

export default categorySlice.reducer;

// interface CategoryState {
//   loading: boolean;
//   data: {} | null;
//   error: string;
// }

// const initialState = {
//   loading: false,
//   data: {},
//   error: "",
// } as CategoryState;

// export const getCategories = createAsyncThunk("api/category", async () => {
//     const response = await axios.get("http://localhost:3000/api/category");
//     return response.data;
// });

// export const createNewCategory = createAsyncThunk("api/create", async (cat) => {
//     const response = await axios.post("http://localhost:3000/api/category/create", cat);
//     console.log('slice --> ', response)
//   return response.data;
// });

// const categorySlice = createSlice({
//   name: "category",
//   initialState,
//   reducers: {
//     //this remains empty
//   },
//   extraReducers: (builder) => {
//     builder.addCase(getCategories.pending, (state) => {
//       state.loading = true;
//     });
//     builder.addCase(getCategories.fulfilled, (state, { payload }) => {
//       state.loading = false;
//       state.data = payload;
//     });

//     builder.addCase(getCategories.rejected, (state, { error }) => {
//       state.loading = false;
//       state.error = error.message;
//     });

//     //@POST
//     builder.addCase(createNewCategory.pending, (state) => {
//         state.loading = true
//     })
//     builder.addCase(createNewCategory.fulfilled, (state, { payload }) => {
//       state.loading = false;
//       state.data = payload;
//     });

//     builder.addCase(createNewCategory.rejected, (state, { error }) => {
//       state.loading = false;
//       state.error = error.message;
//     });
//   },
// });
