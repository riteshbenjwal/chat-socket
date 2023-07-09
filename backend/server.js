const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors");

//routes
const userRoutes = require("./routes/userRoutes");
const { errorHandler, notFound } = require("./middleware/errorMiddleware");

dotenv.config();

connectDB();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/users", userRoutes);

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running at ${PORT}`.yellow.bold);
});
