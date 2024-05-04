import mongoose, { isValidObjectId } from 'mongoose'
import { Course } from '../models/Course.model.js'
import { ApiResponse, ApiError, asyncHandler } from '../utils/index.js'

const getAllCourses = asyncHandler(async (_, res) => {
  const courses = await Course.find()
  if (!courses) {
    throw new ApiError(404, 'No courses found')
  }
  res
    .status(200)
    .json(new ApiResponse(200, courses, 'Courses fetched successfully.'))
})

const getCourseById = asyncHandler(async (req, res) => {
  const { id } = req.params
  if (!isValidObjectId(id)) {
    throw new ApiError(400, 'Invalid course ID')
  }
  const course = await Course.findById(id)
  if (!course) {
    throw new ApiError(404, 'Course not found')
  }
  res
    .status(200)
    .json(new ApiResponse(200, course, 'Course fetched successfully.'))
})

const likesUpdater = asyncHandler(async (req, res) => {
  const { increment } = req.query
  const { id } = req.params
  if (increment === undefined) {
    throw new ApiError(400, 'Increment query parameter is required')
  }
  if (!isValidObjectId(id)) {
    throw new ApiError(400, 'Invalid course ID.')
  }
  console.log('Increment->  ', increment, '\nId->  ', id)

  const course = await Course.findOne({ _id: id })

  if (!course) {
    throw new ApiError(404, 'Course not found.')
  }

  if (increment === 'true') {
    course.likes += 1
  } else if (increment === 'false' && course.likes > 0) {
    course.likes -= 1
  }

  await course.save({ validateBeforeSave: false })

  res
    .status(200)
    .json(new ApiResponse(200, course, 'Likes updated successfully.'))
})

export { getAllCourses, getCourseById, likesUpdater }
