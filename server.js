const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use("/static", express.static("static"));
app.set("view engine", "hbs");

const MongoClient = require("mongodb").MongoClient;
let db;

MongoClient.connect(
  "mongodb://hamz91:nelliemunchkin4466@ds121251.mlab.com:21251/movie-quote-practice-mongodb",
  (err, client) => {
    if (err) {
      return console.log(err);
    }
    db = client.db("movie-quote-practice-mongodb");

    app.post("/api/quotes", (req, res) => {
      db.collection("quotes").save(req.body, (err, result) => {
        if (err) {
          return console.log(err);
        }
        console.log("saved to database");
        res.redirect("/");
      });
    });

    app.get("/api/quotes", (req, res) => {
      db.collection("quotes")
        .find({})
        .toArray((err, results) => {
          if (err) {
            return console.log(err);
          }
          res.json(results);
          console.log(results);
        });
    });

    app.get("/", (req, res) => {
      res.render("index");
    });

    const port = process.env.PORT || 8086;
    app.listen(port, function() {
      console.log(`Listening on port number http://localhost:${port}`);
    });
  }
);
