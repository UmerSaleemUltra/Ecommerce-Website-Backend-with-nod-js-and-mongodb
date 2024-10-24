import mongoose from 'mongoose'

//connection string
mongoose.connect('mongodb+srv://umer:171175@cluster0.zbqcm.mongodb.net/Product?retryWrites=true&w=majority')

export default mongoose