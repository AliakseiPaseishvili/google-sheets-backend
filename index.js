const express = require("express");
const WebSocket = require("ws");
const request = require("request");
require("dotenv").config();
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log("lol");
  res.send("Hello World!");
});

const server = app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

const wss = new WebSocket.Server({ server });

wss.on("connection", async (ws) => {
  try {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/17FXJ_St91eMQ7Fc3zO4YMMhfzixG5g2wq0a3Mk77XsE/values/Sheet2?key=${process.env.API_KEY}`;
    console.log(url)
    
    ws.on("message", (message) => {
      console.log("Received message:", message);
      request(url,function (error, response, body) {
        if (!error && response.statusCode == 200) {
          ws.send(body) // Print the google web page.
        }
      })
    });

    ws.on("close", () => {
      console.log("WebSocket connection closed");
    });
  } catch (error) {
    console.error("Error:", error);
  }
});
