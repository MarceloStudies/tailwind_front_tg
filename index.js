const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// design file
app.use(express.static("public"));
app.get('/public/js/exam.js', (req, res) => {
  res.type('application/javascript'); 
  res.sendFile(__dirname + '/public/js/exam.js');
});

// routes
app.set("view engine", "ejs");
// routers
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/exam", (req, res) => {
  res.render("exam");
});

// server listening
app.listen(PORT, () => {
  console.log(`The app start on http://localhost:${PORT}`);
});
