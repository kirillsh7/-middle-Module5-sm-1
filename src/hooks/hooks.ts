import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from 'react-redux'
import { Dispatch } from 'redux'
// import { ProjectActions } from "./actions";
import { RootState } from '../../src/store/store'

// export const useAppDispatch = useDispatch<ThunkDispatch<RootState, void, ProjectActions>>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppStore = useStore<RootState>
