import { Link } from 'react-router-dom'
import ProgressBar from './ProgressBar'

const Card = ({
  id = '',
  thumbnail = '',
  courseName = '',
  instructorName = '',
  description = '',
  showProgressBar,
  progressBarWidth = '0%',
  dueDate = '',
}) => {
  return (
    <>
      <div className="max-w-sm min-w-60 p-6  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transition-transform cursor-pointer">
        <img
          src={thumbnail}
          alt="thumbnail"
          className="shadow-md shadow-white mb-3"
        />
        <h5 className="mb-2 text-2xl pr-10 font-bold tracking-tight text-gray-900 dark:text-white">
          {courseName}
        </h5>
        <p className="text-end text-sm mb-5 tracking-tight text-gray-900 dark:text-white italic">
          By - {instructorName}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <Link
          to={`/course/${id}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          View Details
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
        {showProgressBar && (
          <>
            <p className="my-4 text-lg font-normal text-gray-700 dark:text-gray-200">
              Progression:
            </p>
            <ProgressBar progressBarWidth={progressBarWidth} />
            <p className="text-end my-3 mt-5 text-lg font-normal text-gray-700 dark:text-gray-200">
              Due Date: {dueDate}
            </p>
          </>
        )}
      </div>
    </>
  )
}

export default Card
