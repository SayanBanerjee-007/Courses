import { Router } from 'express'
import {
  getAllCourses,
  getCourseById,
  likesUpdater,
} from '../controllers/course.controller.js'

const courseRouter = Router()

courseRouter.route('/').get(getAllCourses)
courseRouter.route('/:id').get(getCourseById).patch(likesUpdater)

export { courseRouter }
