const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const usersRouter = require("./routes/users");
const postsRouter = require("./routes/posts");
const authRouter = require("./routes/auth");
const eventsRouter = require("./routes/events");
const forumPostsRouter = require("./routes/forumPosts");

app.use(usersRouter);
app.use(postsRouter);
app.use(authRouter);
app.use(eventsRouter);
app.use(forumPostsRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
