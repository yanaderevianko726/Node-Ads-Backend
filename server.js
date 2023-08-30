const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8081;

var adId = '64e2f1538dca18d654d686fa';
var adName = 'AdCountNovo';

app.use(cors({
  origin: "http://localhost:8001"
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/getAdsInfo", (req, res) => {
  var resp = {
    "adsId": adId,
    "adName": adName
  }
  res.json(resp);
});

app.post('/api/postAdsInfo', (req, res) => {  
  adId = req.body.adsId;
  adName = req.body.adName;

  var resp = {
    "adsId": adId,
    "adName": adName
  }
  res.json(resp);
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
