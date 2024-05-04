import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  _id: '',
  name: '',
  email: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state._id = action.payload._id
      state.name = action.payload.name
      state.email = action.payload.email
    },
  },
})

export const { setUser } = userSlice.actions
export default userSlice.reducer
