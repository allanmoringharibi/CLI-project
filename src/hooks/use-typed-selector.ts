import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../state";
import { Cell } from "../state/cell";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
