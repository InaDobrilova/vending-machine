# User guide

The project uses local storage for storing items that the vending machine offers. The products are automatically loaded on project start and stored in local storage under the `vendingProducts` key. The items are removed from local storage as they are being sold. To reset the initial state of the product catalog during testing you can use the following command in the console of your browser: `localStorage.removeItem("vendingProducts")`

## Roadmap

For future versions of the project these are some of the features that will be worked on:

-   Improving test coverage using react-testing-library
-   Introduce E2E testing
-   Add typescript support
-   Add admin panel
-   Add card payments
-   Others

## Running the project

First the required npm modules need to installed by running the following command from the project directory:

`npm install`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run format`

Runs prettier for the whole project, using the configuration specified in the .prettierrc file.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
