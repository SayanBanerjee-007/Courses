import { useSelector } from 'react-redux'
import Card from './Card'

const CourseList = () => {
  const filteredCourses = useSelector(
    state => state.courses.filteredCourses
  )

  return !filteredCourses || filteredCourses?.length === 0 ? (
    <div className="flex justify-center items-center h-full">
      <h1 className="text-4xl font-bold">No course available</h1>
    </div>
  ) : (
    <>
      <h2 className=" dark:text-gray-900 text-white text-5xl mt-10 text-center">
        COURSES
      </h2>
      <div className="grid grid-rows-1 md:grid-cols-2 xl:grid-cols-3 py-20 px-2 lg:px-10 gap-20">
        {filteredCourses.map(course => (
          <div
            className="flex justify-center"
            key={course._id}
          >
            <Card
              id={course._id}
              thumbnail={course.thumbnail}
              courseName={course.name}
              instructorName={course.instructor}
              description={course.description}
              likes={course.likes}
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default CourseList
