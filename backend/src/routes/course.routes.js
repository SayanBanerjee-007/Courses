import { Router } from 'express'
import {
  getAllCourses,
  getCourseById,
} from '../controllers/course.controller.js'

const courseRouter = Router()

courseRouter.route('/').get(getAllCourses)
courseRouter.route('/:id').get(getCourseById)

export { courseRouter }
