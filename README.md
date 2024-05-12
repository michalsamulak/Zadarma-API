# Zadarma API call

This Node.js application serves as an example of integrating with the Zadarma API. It provides functionality to make various API calls, such as retrieving tariff information and uploading files. The application demonstrates proper authentication and error handling when interacting with the Zadarma API.

## Tool & technologies I've used

-   Visual Studio Code
-   Axios
-   Node.js
-   Zadarma API

Integrating with the Zadarma API presented a formidable challenge during the app's development phase, so please note that using this app may require some adjustments in the future.

## How to use it

Download zip file and unpack it or Clone the repository to your local machine.

Use `npm install` command to get all required dependencies.

```
npm install
```

Create a .env file in the root directory.

Add your Zadarma API key and secret to the .env file:

```
ZADARMA_API_KEY=your_api_key
ZADARMA_API_SECRET=your_api_secret
```

Run node app.js to start the application.

```
npm start
```

The application will demonstrate various Zadarma API calls. You can modify app.js to customize the calls as needed.
