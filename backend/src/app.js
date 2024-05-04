import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { CORS_ORIGIN } from './constants.js'
import { createServer } from 'http'
import { Server } from 'socket.io'
import { socketIoHandler } from './socketIO/index.js'

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer, {
  cors: {
    origin: CORS_ORIGIN,
  },
})
socketIoHandler(io)

app.use(
  cors({
    origin: CORS_ORIGIN,
    credentials: true,
  })
)
app.use(express.json({ limit: '16kb' }))
app.use(express.urlencoded({ extended: true, limit: '16kb' }))
app.use(express.static('public'))
app.use(cookieParser())

// Routes Import ++++++++++
import { courseRouter } from './routes/course.routes.js'

// Routes Declaration ++++++++++
app.use('/api/v1/courses', courseRouter)

export { app, httpServer }
