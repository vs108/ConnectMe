import mongoose from "mongoose";

const connectToMongoDB = async () => {
	try {
		await mongoose.connect(mongodb+srv://<db_username>:a2OzU5gsBYYlGKfE@cluster0.37thxt0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0);
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;
