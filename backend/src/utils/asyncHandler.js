import { ApiResponse } from './ApiResponse.js'

const asyncHandler = callBack => {
  return async (req, res, next) => {
    try {
      await callBack(req, res, next)
    } catch (error) {
      console.log('\nasyncHandler error.stack:\n\n', error.stack)
      res
        .status(error.statusCode || 500)
        .send(
          new ApiResponse(
            error.statusCode || 500,
            error.data,
            error.message || 'Internal Server Error.',
            error.errors
          )
        )
    }
  }
}

export { asyncHandler }

// const asyncHandler = callBack => {
//   return (req, res, next) => {
//     Promise.resolve(callBack(req, res, next)).catch(err => {
//       next(err)
//     })
//   }
// }
