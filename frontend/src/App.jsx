import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  setAllCourses,
  setFilteredCourses,
} from './store/courseSlice'
import { setUser } from './store/UserSlice'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import './socketIO/index'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    fetch('/api/v1/courses')
      .then(res => res.json())
      .then(data => {
        console.log('Fetched data', data)
        dispatch(setAllCourses(data.data))
        dispatch(setFilteredCourses(data.data))
        dispatch(setUser(data.data[0].students[0]))
      })
  }, [])
  return (
    <main className="min-h-screen flex flex-col justify-between from-indigo-900 bg-gradient-to-t text-xl">
      <Header />
      <Outlet />
      <Footer />
    </main>
  )
}

export default App
