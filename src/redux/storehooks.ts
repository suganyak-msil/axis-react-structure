import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import store from "./store";


export type RootStateType = ReturnType<typeof store.getState>

export type AppDispatchType = typeof store.dispatch;


type DispatchFunc = () => AppDispatchType
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;