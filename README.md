# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

##This is the description of activities do to:

###On Login page.
Add validations. 
- For Password
  - The field should hide the typed characters.
  - Not empty and min length 6 characters.
- For Email:
  - The field should be of email type
  - Validate email with regex
  
After successfully pass validations go to Products screen

###Create Products screen
 - 1.- Create new react route for Products
 - 2.- Create new Component for Products route
 - 3.- Try to recreate the layout as is described on Layout.png image on Resources folder
 
#### Required functionality on Products screen
 - The header, footer and shopping cart have to be on different react components
 - When the user clicks on any movie image, the shopping cart icon should count +1, 
 except if the movie was already added to the shopping cart
 - When the user clicks on shopping cart button, it has display the transaction total. It have to be displayed on a modal.
 - The process to display the movies needs to be done with a loop.
 
Note: All the images and elements are on Resources folder
