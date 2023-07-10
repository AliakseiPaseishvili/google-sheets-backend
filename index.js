const express = require("express");
const WebSocket = require("ws");
const request = require("request");
require("dotenv").config();
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("This api contains only simple websocket implementation");
});

const server = app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

const wss = new WebSocket.Server({ server });

wss.on("connection", async (ws, req) => {
  try {
    const [sheetId, title] = req.url.split("/").filter((data) => data);
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${title}?key=${process.env.API_KEY}`;

    ws.on("message", (message) => {
      request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          ws.send(body);
        }
      });
    });

    ws.on("close", () => {});
  } catch (error) {
    console.error("Error:", error);
  }
});
