
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AllLanguages, i18nList, LanguageCode } from "../../utils/language/AllLanguages";
import { ILanguageData } from "../../utils/language/ILanguageData";


const loadInitialState = () => {
  let lang: string | null = sessionStorage.getItem("GLOBAL_LANGUAGE");
  if (!lang || !AllLanguages[lang]) {
    lang = i18nList[0].id;
    sessionStorage.setItem("GLOBAL_LANGUAGE", lang);
  }
  return { data: AllLanguages[lang], code: lang } as ILanguageData;
}

const initialState: ILanguageData = loadInitialState();

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setGlobalLanguage: (state: ILanguageData, action: PayloadAction<LanguageCode>) => {
      if (!AllLanguages[action.payload])
        return;

      state.data = AllLanguages[action.payload];
      state.code = action.payload;
      sessionStorage.setItem("GLOBAL_LANGUAGE", action.payload);

    },
  },
});


export const languageReducer = languageSlice.reducer;
export const { setGlobalLanguage } = languageSlice.actions;


