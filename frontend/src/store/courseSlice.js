import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allCourses: [],
  filteredCourses: [],
}

const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    setAllCourses(state, action) {
      state.allCourses = action.payload
    },
    setFilteredCourses(state, action) {
      state.filteredCourses = action.payload
    },
  },
})

export const { setAllCourses, setFilteredCourses } =
  courseSlice.actions
export default courseSlice.reducer
