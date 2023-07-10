# Google sheets and express.js

This is simple backend that has websocket for client, where we send the data from google sheet to client application.

This repository shows simple implementation of websocket.

# Installation and start

Before installation we need to create google api key.
1. Open: https://console.cloud.google.com/
2. Create new project by pressing button in header of the page. Give the name to the project and write organization where you work. you can also see the ID_OF_PROJECT.
3. After creation you need to go to this page https://console.cloud.google.com/apis/library?project=ID_OF_PROJECT. It will open library page. Here you need to activate `google sheets api`.
4. After activation of google sheets api. you need to open this page.
https://console.cloud.google.com/apis/credentials?project=ID_OF_PROJECT. Here you press on '+ create credentials' -> API Key.

Installation:
1. Download the repository.
2. Write `npm i` in console in root folder.
3. Add google api key to `API_KEY` in `.env` file in root folder. Create`.env` file if it doesn't exist.
4. run command `npm run start`.
