import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { INITIAL_STATE, IUser } from '../interfaces/user.interface'

const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    login: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload
      localStorage.setItem('user', JSON.stringify(action.payload))
    },
    logout: (state) => {
      state.user = null
      localStorage.removeItem('user')
    },
  },
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer
