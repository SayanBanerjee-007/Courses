import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Accordion from './Accordion'

const CourseDetails = () => {
  const { id: courseId } = useParams()
  const allCourses = useSelector(state => state.courses.allCourses)
  const course = allCourses.find(course => course._id === courseId)

  return course ? (
    <section className="flex flex-col md:my-10 ">
      <div className="">
        <div className="max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:mx-5">
          <img
            className="w-full md:h-96 md:object-contain rounded-t-none md:rounded-lg"
            src={course.thumbnail}
            alt=""
          />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {course.name}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {course.description}
            </p>
            <p className="text-end text-lg mb-5 tracking-tight text-gray-900 dark:text-white italic">
              By - {course.instructor}
            </p>
          </div>

          <div className="relative flex justify-center pb-10">
            <table className="text-lg text-left rtl:text-right text-gray-500 dark:text-gray-400 md:border-[0.1px] border-black dark:border-white">
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="px-6 py-4">Enrollment Status:</td>
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                    {course.enrollmentStatus}
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="px-6 py-4">Duration:</td>
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                    {course.duration}
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                  <td className="px-6 py-4">Schedule:</td>
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white ">
                    {course.schedule}
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="px-6 py-4">Location:</td>
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                    {course.location}
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="px-6 py-4">Prerequisites:</td>
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                    {course?.prerequisites &&
                      course.prerequisites.map(
                        (prerequisite, index) => {
                          console.log('object')
                          if (
                            index ===
                            course.prerequisites.length - 1
                          ) {
                            return prerequisite
                          }
                          return prerequisite + ', '
                        }
                      )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="my-4 text-4xl ml-4 font-normal text-gray-700 dark:text-gray-400">
            Syllabus
          </h3>
          <div>
            <div
              id="accordion-collapse"
              data-accordion="collapse"
              className=""
            >
              {course?.syllabus?.length > 0 &&
                course.syllabus.map((syllabus, index) => (
                  <Accordion
                    key={syllabus._id}
                    index={index}
                    week={syllabus.week}
                    topic={syllabus.topic}
                    content={syllabus.content}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  ) : (
    <p className="text-gray-700 dark:text-gray-400">Loading...</p>
  )
}

export default CourseDetails
