const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { v4 } = require("uuid");

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res) => {
  res.send("<h1>Server is running</h1>");
});

app.listen(5000, () => {
  console.log("Server is running at port 5000");
});

app.post("/upload-audio", (req, res) => {
  const { audio } = req.body;

  if (audio) {
    const bufferedAudio = Buffer.from(audio, "base64");
    fs.writeFileSync(`audios/${v4()}.wav`, bufferedAudio);
    console.log("Stored successfully");
  }
});
