const socketIoHandler = io => {
  io.on('connection', socket => {
    console.log('New client connected -->', socket.id)
    socket.on('like-updated-server', data => {
      console.log('Like updated on server', data)
      io.emit('like-updated-client', data)
    })
    socket.on('disconnect', () => {
      console.log('Client disconnected', socket.id)
    })
  })
}

export { socketIoHandler }
