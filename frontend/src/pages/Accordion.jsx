import React, { useState } from 'react'

const Accordion = ({ index, week, topic, content }) => {
  const [hidden, setHidden] = useState(true)
  return (
    <>
      <h2 id={`accordion-collapse-heading-${index}`}>
        <button
          type="button"
          className="flex items-center justify-between p-5 w-full font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
          // data-accordion-target={`#accordion-collapse-body-${index}`}
          // aria-expanded="false"
          // aria-controls={`accordion-collapse-body-${index}`}
          onClick={e => {
            setHidden(!hidden)
          }}
        >
          <span className=" text-gray-500 dark:text-gray-200 text-2xl">
            Week {week}
          </span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 shrink-0 ${
              hidden ? 'rotate-180' : ''
            }`}
            // aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id={`accordion-collapse-body-${index}`}
        className={hidden ? 'hidden' : ''}
        // aria-labelledby={`accordion-collapse-heading-${index}`}
      >
        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
          <p className="mb-2 text-gray-500 dark:text-gray-200">
            <strong className="text-xl">Topic: </strong>
            {topic}
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-200">
            <strong className="text-xl">Content: </strong>
            {content}
          </p>
        </div>
      </div>
    </>
  )
}

export default Accordion
