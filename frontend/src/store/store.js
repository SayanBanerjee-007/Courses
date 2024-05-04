import { configureStore } from '@reduxjs/toolkit'
import courseSliceReducer from './courseSlice'
import userSliceReducer from './UserSlice'

const store = configureStore({
  reducer: {
    courses: courseSliceReducer,
    user: userSliceReducer,
  },
})

export default store
