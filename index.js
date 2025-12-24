const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 7000;

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "layout"); // default layout

// Load CV JSON
const cvData = JSON.parse(fs.readFileSync("./data/cv.json", "utf-8"));

// Routes
app.get("/", (req, res) => {
  res.render("pages/home", { cv: cvData });
});

app.get("/about", (req, res) => {
  res.render("pages/about", { cv: cvData });
});

app.get("/resume", (req, res) => {
  res.render("pages/resume", { cv: cvData });
});

app.get("/projects", (req, res) => {
  res.render("pages/projects", { cv: cvData });
});

app.get("/contact", (req, res) => {
  res.render("pages/contact", { cv: cvData });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
