
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GlobalStorageKeys } from "../../common/constants";
import { themesList } from "../../utils/theme/AllThemes";

interface IInitialState {
  [key: string]: any;
}

interface IPayloadType {
  key: string,
  value: any,
}

const loadInitialState = (): IInitialState => {
  let data: IInitialState = {};
  let storeddata: string | null = sessionStorage.getItem("GLOBAL_COMMON_STORE");
  if (!storeddata) {    
    data[GlobalStorageKeys.CurrentTheme] = themesList[0].id;
  } else {
    data = JSON.parse(storeddata);
  }
  return data;
}

const initialState: IInitialState = loadInitialState();
sessionStorage.setItem("GLOBAL_COMMON_STORE", '');

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setGlobalValue: (state: IInitialState, action: PayloadAction<IPayloadType>) => {
      if (action.payload.key) {
        state[action.payload.key] = action.payload.value;
      }
    },
  },
});

export const saveGlobalStore = (value: IInitialState) => {
  sessionStorage.setItem("GLOBAL_COMMON_STORE", JSON.stringify(value));
}

export const commonReducer = commonSlice.reducer;
export const { setGlobalValue } = commonSlice.actions;
