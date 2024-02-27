const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://c1459008:6OWMWswdVNRnvrvb@tour.1bc9t4r.mongodb.net/?retryWrites=true&w=majority&appName=tour'

mongoose.connect(connectionString, {

})

const db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
db.once('open', () => {
    console.log('Connected to MongoDB')
})
