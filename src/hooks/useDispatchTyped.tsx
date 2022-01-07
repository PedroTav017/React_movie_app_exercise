import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/index" 

// assigning type to useDispatch
export const useDispatchTyped = () => useDispatch<AppDispatch>()
