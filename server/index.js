const express = require('express')
const cors = require('cors')
const { connect } = require('mongoose')
require('dotenv').config()
const upload = require('express-fileupload')

const userRoutes = require('./routes/userRoutes')
const postRoutes = require('./routes/postRoutes')
const { notFound, errorMiddleware } = require('./middlewares/errorMiddleware')


const app = express();

app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))
app.use(cors({ credentials: true, origin: "http://localhost:5173" }))
app.use(upload())
app.use('/uploads', express.static(__dirname + '/uploads'))






app.use('/api/users', userRoutes)
app.use('/api/posts', postRoutes)

app.use(notFound)
app.use(errorMiddleware)

connect(process.env.MONGODB_URI).then(app.listen(process.env.PORT || 5000, () => console.log(`server started on port ${process.env.PORT}`)))
    .catch(error => { console.log(error) })


