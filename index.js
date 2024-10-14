const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userRoutes = require('./routes/user.routes')
const EmployeRoutes=require('./routes/Manage.routes.js')
const CategoryRoutes=require('./routes/category.routes.js')



const PORT = process.env.PORT || 4000

const app = express()

app.use(express.json())

app.use(cors())
app.use('/', userRoutes)
app.use('/',EmployeRoutes)
app.use('/',CategoryRoutes)



const URI = "mongodb+srv://sharmilamoorthy:sharmilamoorthy@cluster0.qqbwzvc.mongodb.net/"
mongoose.connect(URI).then(() => {
    app.listen(PORT, () => {
        console.log(`server is running in ${PORT}`)
        console.log(`mongodb connected`)
    })
}).catch((err) => {
    console.log(err)
})