import mongoose from 'mongoose'
import 'dotenv/config'

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("conected to MongoDB"))
.catch((error) => console.error("Error connecting to MongoDB", error));

export default mongoose;