import mongoose from 'mongoose'

mongoose.connect("mongodb+srv://elkkasfoxxtt:lucas@cluster-nacho.v4vvghs.mongodb.net/Groceries_Nacho?appName=Cluster-nacho")
.then((cnn)=> console.log ("conected to MongoDB"))
.catch((error)=> console.error("Error connecting to MongoDB",error));

export default mongoose;