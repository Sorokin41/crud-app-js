const express = require('express')
const userRouter = require('./src/routes/user.routes')
const postRouter = require('./src/routes/post.routes')

const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use('/api', userRouter)
app.use('/api', postRouter)

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))