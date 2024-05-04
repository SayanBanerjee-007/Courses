import dotenv from 'dotenv'
dotenv.config({
  path: './.env',
})

const PORT = Number(process.env.PORT)
const DATABASE_NAME = String(process.env.DATABASE_NAME)
const MONGODB_URI = String(process.env.MONGODB_URI)
const CORS_ORIGIN = String(process.env.CORS_ORIGIN)
const ACCESS_TOKEN_SECRET = String(process.env.ACCESS_TOKEN_SECRET)
const ACCESS_TOKEN_EXPIRY = String(process.env.ACCESS_TOKEN_EXPIRY)
const REFRESH_TOKEN_SECRET = String(process.env.REFRESH_TOKEN_SECRET)
const REFRESH_TOKEN_EXPIRY = String(process.env.REFRESH_TOKEN_EXPIRY)

export {
  PORT,
  DATABASE_NAME,
  MONGODB_URI,
  CORS_ORIGIN,
  ACCESS_TOKEN_EXPIRY,
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET,
  REFRESH_TOKEN_EXPIRY,
}
