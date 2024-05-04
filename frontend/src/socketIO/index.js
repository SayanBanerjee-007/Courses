import { useDispatch, useSelector } from 'react-redux'
import store from '../store/store'
import { io } from 'socket.io-client'
import {
  setAllCourses,
  setFilteredCourses,
} from '../store/courseSlice'
const socket = io('http://localhost:8000')
// const dispatch = useDispatch()

socket.on('connect', () => {
  console.log(socket.id)
})

socket.on('disconnect', () => {
  console.log(socket.id)
})

socket.on('like-updated-client', data => {
  console.log('like-updated-client', data)
  const allCourses = store.getState().courses.allCourses
  const updatedCourses = allCourses.map(course => {
    if (course._id === data.id) {
      return { ...course, likes: data.likes }
    }
    return course
  })
  store.dispatch(setAllCourses(updatedCourses))
  store.dispatch(setFilteredCourses(updatedCourses))
})

export { socket }
