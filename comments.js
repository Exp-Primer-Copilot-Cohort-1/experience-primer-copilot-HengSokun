// Create web server
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 4001;
const comments = require("./data/comments");

// Use Node.js body parsing middleware
app.use(bodyParser.json());

// Create route handlers
app.get("/comments", (req, res) => {
  res.send(comments);
});

app.get("/comments/:id", (req, res) => {
  const id = req.params.id;
  const foundComment = comments.find(comment => comment._id === Number(id));
  res.send(foundComment);
});

app.post("/comments", (req, res) => {
  const newComment = req.body;
  newComment._id = comments.length + 1;
  comments.push(newComment);
  res.send(newComment);
});

app.put("/comments/:id", (req, res) => {
  const id = req.params.id;
  const commentIndex = comments.findIndex(comment => comment._id === Number(id));
  const updatedComment = Object.assign(comments[commentIndex], req.body);
  res.send(updatedComment);
});

app.delete("/comments/:id", (req, res) => {
  const id = req.params.id;
  const deletedComment = comments.find(comment => comment._id === Number(id));
  const commentIndex = comments.findIndex(comment => comment._id === Number(id));
  comments.splice(commentIndex, 1);
  res.send(`Deleted comment: ${deletedComment}`);
});

// Start the server
app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
