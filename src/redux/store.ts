import {
  Action,
  AnyAction,
  applyMiddleware,
  combineReducers,
  configureStore,
  getDefaultMiddleware,
  MiddlewareArray,
  ThunkAction,
} from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

// import GetCategoriesReducer from "./category/categorySlice";
import { categoriesApi } from "./services/categoryApi";

const combinedReducer = combineReducers({
  // category: GetCategoriesReducer,  /****** When using createAsuncThunk register yout reducers here ******/
  [categoriesApi.reducerPath]: categoriesApi.reducer, /****** When using RTKQ use this method to register reducer ******/
});

const reducer = (state: ReturnType<typeof combinedReducer>, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export const makeStore = () =>
  configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(categoriesApi.middleware), /****** When using RTKQ use this method to register reducer ******/
  });

type Store = ReturnType<typeof makeStore>;

export type AppDispatch = Store["dispatch"];
export type RootState = ReturnType<Store["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper(makeStore, { debug: true });
