import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/index" 

export const useDispatchTyped = () => useDispatch<AppDispatch>()
