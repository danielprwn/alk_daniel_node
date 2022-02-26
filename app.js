const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
const path = require("path");
const functions = require("./functions");

app.set("view engine", "hbs");

app.use("/assets", express.static(path.join(__dirname, "./assets")));
app.use("/js", express.static(path.join(__dirname, "./js")));

app.get("/", function (req, res) {
  res.render("index", {
    title: "Tytuł strony",
    subtitle: "Podtytuł",
    dodawanie: functions.add(1, 2),
  });
});

app.get("/about", function (req, res) {
  res.render("About");
});

app.get("/kontakt", function (req, res) {
  res.render("Kontakt");
});

app.listen(port, (err) => {
  if (err) {
    return console.log(`Błąd ${err}`);
  }
  console.log(`Serwer działa na porcie ${port}`);
});
