import { TypedUseSelectorHook, useSelector } from "react-redux";
import type { RootState } from "../store/index" 

// assigning type to useSelector
export const useSelectorTyped: TypedUseSelectorHook<RootState> = useSelector