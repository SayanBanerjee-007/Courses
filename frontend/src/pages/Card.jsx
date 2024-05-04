import { useState } from 'react'
import { Link } from 'react-router-dom'
import ProgressBar from './ProgressBar'
import { socket } from '../socketIO'

const Card = ({
  id = '',
  thumbnail = '',
  courseName = '',
  instructorName = '',
  description = '',
  showProgressBar,
  progressBarWidth = '0%',
  dueDate = '',
  likes = 0,
}) => {
  const [fill, setFill] = useState('none')

  const LikeHandler = e => {
    if (fill === 'none') {
      console.log('Id->  ', id)
      fetch(`/api/v1/courses/${id}?increment=true`, {
        method: 'PATCH',
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if (data.statusCode === 200) {
            setFill('currentColor')
            socket.emit('like-updated-server', {
              id,
              likes: data.data.likes,
            })
          }
        })
    } else {
      fetch(`/api/v1/courses/${id}?increment=false`, {
        method: 'PATCH',
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if (data.statusCode === 200) {
            setFill('none')
            socket.emit('like-updated-server', {
              id,
              likes: data.data.likes,
            })
          }
        })
    }
  }

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
        <div className="flex justify-between text-sm mb-5 tracking-tight text-gray-900 dark:text-white ">
          <p className="flex items-center gap-3">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white inline"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill={fill}
              viewBox="0 0 24 24"
              onClick={LikeHandler}
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
              />
            </svg>
            <span className="text-xl">{likes}</span>
          </p>
          <p className="italic">By - {instructorName}</p>
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <Link
          to={`/courses/${id}`}
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
