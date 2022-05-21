import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../interfaces/interfaces'
import { RootState } from '../app/store';
interface UserState {
   user:IUser|undefined
}
const initialState: UserState = {
  user:undefined
}

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    initializeUser: (state, action: PayloadAction<IUser>) => {
      console.log("initializeUser");
      state.user = action.payload
    },
    
  },
})

// Action creators are generated for each case reducer function
export const {initializeUser} =userSlice.actions
export default userSlice.reducer
export const getUser = (state: RootState): IUser | undefined => {
  console.log('state', state);

  return state.userReducer.user;
};
