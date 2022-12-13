const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

app.use(express.json());

/* app.get("/beers", (req,res) => {
    fs.readFile(`${__dirname}/data/beers.json`, function (err, data) {
        if (err) {
          console.log(err);
          return res.status(500).send(err);
        } else {
          let beerData = JSON.parse(data);
          return res.send(beerData);
        }
      });
}) */

// ugyanaz mint feljebb, de fájl beolvasás nélkül.
app.get("/beers/beerData", (req, res) => {
  res.sendFile(path.join(`${__dirname}/data/beers.json`));
});

app.post("/beers/add", (req, res) => {
  const newBeerData = {
    name: req.body.name,
    tagline: req.body.tagline,
    abv: req.body.abv,
  };

  fs.readFile(`${__dirname}/data/beers.json`, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const beerData = JSON.parse(data);
      beerData.push(newBeerData);

      fs.writeFile(
        `${__dirname}/data/beers.json`,
        JSON.stringify(beerData, null, 4),
        (err) => {
          if (err) {
            console.log(err);
          } else {
            return res.json(newBeerData);
          }
        }
      );
    }
  });
});

// app.post("/beers/add", (req,res) => {
//   console.log(req.body)
//   res.status(200).json({"res":"ok"})
// })

app.listen(9000, () => {
  console.log("http://127.0.0.1:9000");
});
