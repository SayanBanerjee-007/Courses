import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Card from './Card'

const Dashboard = () => {
  const userData = useSelector(state => state.user)
  const allCourses = useSelector(state => state.courses.allCourses)
  const myCourses = allCourses.filter(course =>
    course.students.some(student => student._id === userData._id)
  )
  // const myCourses = null

  return (
    <section className="flex flex-col items-center md:my-10 ">
      <div className="w-full py-10  bg-white dark:bg-gray-800 border border-gray-200 rounded-lg shadow   dark:border-gray-700 ">
        <div className="flex flex-col items-center pb-10">
          <svg
            className="w-[48px] h-[48px] text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
              clipRule="evenodd"
            />
          </svg>

          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {userData.name}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {userData.email}
          </span>
          <div className="flex mt-4 md:mt-6">
            <Link
              to=""
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Logout
            </Link>
            <a
              href="#"
              className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Message
            </a>
          </div>
        </div>
        <h3 className="my-4 text-4xl text-center font-normal text-gray-700 dark:text-gray-400">
          My Courses
        </h3>
        <>
          {!myCourses ? (
            <div className="flex justify-center items-center h-full">
              <h1 className="text-4xl font-bold  text-gray-700 dark:text-gray-400">
                No course is purchased yet.
              </h1>
            </div>
          ) : (
            <div className="w-full grid sm:grid-rows-1 md:grid-cols-2 xl:grid-cols-3 py-20 px-2 lg:px-10 gap-20">
              {myCourses.map(course => {
                console.log('called')
                return (
                  <div
                    className="flex flex-col items-center justify-center "
                    key={course._id}
                  >
                    <Card
                      id={course._id}
                      thumbnail={course.thumbnail}
                      courseName={course.name}
                      instructorName={course.instructor}
                      description={course.description}
                      showProgressBar={true}
                      progressBarWidth="45%"
                      dueDate="12/12/2024"
                    />
                  </div>
                )
              })}
              {/* {myCourses.map(course => {
              console.log('called')
              return (
                <div
                  className="flex flex-col justify-center "
                  key={course._id}
                >
                  <Card
                    id={course._id}
                    thumbnail={course.thumbnail}
                    courseName={course.name}
                    instructorName={course.instructor}
                    description={course.description}
                    showProgressBar={true}
                    progressBarWidth="45%"
                    dueDate="12/12/2024"
                  />
                </div>
              )
            })}
            {myCourses.map(course => {
              console.log('called')
              return (
                <div
                  className="flex flex-col justify-center "
                  key={course._id}
                >
                  <Card
                    id={course._id}
                    thumbnail={course.thumbnail}
                    courseName={course.name}
                    instructorName={course.instructor}
                    description={course.description}
                    showProgressBar={true}
                    progressBarWidth="45%"
                    dueDate="12/12/2024"
                  />
                </div>
              )
            })}
            {myCourses.map(course => {
              console.log('called')
              return (
                <div
                  className="flex flex-col justify-center "
                  key={course._id}
                >
                  <Card
                    id={course._id}
                    thumbnail={course.thumbnail}
                    courseName={course.name}
                    instructorName={course.instructor}
                    description={course.description}
                    showProgressBar={true}
                    progressBarWidth="45%"
                    dueDate="12/12/2024"
                  />
                </div>
              )
            })}
            {myCourses.map(course => {
              console.log('called')
              return (
                <div
                  className="flex flex-col justify-center "
                  key={course._id}
                >
                  <Card
                    id={course._id}
                    thumbnail={course.thumbnail}
                    courseName={course.name}
                    instructorName={course.instructor}
                    description={course.description}
                    showProgressBar={true}
                    progressBarWidth="45%"
                    dueDate="12/12/2024"
                  />
                </div>
              )
            })} */}
            </div>
          )}
        </>
      </div>
    </section>
  )
}

export default Dashboard
