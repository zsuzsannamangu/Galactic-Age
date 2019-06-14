# _Super Galactic Age Calculator_

#### _The application determines a user’s age based on a planet’s solar years, 06/14/2019_

#### By _**Zsuzsanna Mangu**_

## Description

_This application takes a person's age in Earth years and returns their age in Mercury, Venus, Mars and Jupiter years. It also determines how many years a user has left to live on each planet using the user's input on their average life expectancy._

## Setup/Installation Requirements

* _Install Node.js and its corresponding package manager (npm) from Node's website_
* _Confirm that Node and npm are in place by checking the versions -> run $ node -v then $ npm -v_
* _Clone the repository_
* _Navigate to root directory_
* _Install all required packages locally by running $ npm install in the command line_
* _Run $ npm run build to bundle code_
* _To check the application in the browser run $ npm run start_

## Configuration/dependencies

  * _webpack_ - Webpack is a module bundler that runs by loading assets such as plugins
  * _webpack-cli_ - this package allows us to use Webpack from the command line
  * _webpack-dev-server_ - to set up a live development server so our our code automatically rebundled and reloaded
  * _eslint and eslint loader_ - to check for errors and typos (we need the loader as well to use the linter with Webpack)
  * _uglifyjs-webpack-plugin_ - to minify our code to the bare minimum so our page loads faster
  * _clean-webpack-plugin_ - to clean up our dist folder as it's getting cluttered
  * _css-loader and style-loader_ - to transform our CSS into JavaScript code so Webpack can bundle it
  * _jquery, popper.js and bootstrap_- to develop the front end of our application
  * _html-webpack-plugin_ - to use Webpack to generate HTML files
  * _jasmine-core and Jasmine_ - Jasmine is a JavaScript testing framework to write tests
  * _Karma_ - to run tests wrote with Jasmine
  * _Babel_ - to fit all browsers, we compile code from ES6 to older versions with Babel

## Specs

| Behavior | Input | Output |
| ------------- |:-------------:| -----:|
| Take a person’s birthday and return their age in Earth years. | 05/05/1985 | 34 |
| Take a person’s birthday and return their age in Mercury years. (A Mercury year is .24 Earth years.) | 05/05/1985 | 142 |
| Take a person’s birthday and return their age in Venus years. (A Venus year is .62 Earth years.) | 05/05/1985 | 55 |
| Take a person’s birthday and return their age in Mars years. (A Mars year is 1.88 Earth years.) | 05/05/1985 | 18 |
| Take a person’s birthday and return their age in Jupiter years. (A Jupiter year is 11.86 Earth years.) | 05/05/1985 | 3 |
| Take a person's life expectancy and return how many years a user has left on Earth. | 90 | 56 |
| Take a person's life expectancy and return how many years a user has left on Mercury. | 90 | 233 |
| Take a person's life expectancy and return how many years a user has left on Venus. | 90 | 90 |
| Take a person's life expectancy and return how many years a user has left on Mars. | 90 | 30 |
| Take a person's life expectancy and return how many years a user has left on Jupiter. | 90 | 5 |

## Objectives

* Business logic is tested with Jasmine.
* Karma is correctly configured.
* Project utilizes ES6 features including classes, `let` and `const`.
* Dependencies are managed with npm.
* Webpack is used to lint, bundle, and process code.

## Support and contact details

_Feel free to contact me at zsuzsannamangu[at]gmail.com with any questions._

## Technologies Used

_Javascript, Webpack, Jasmine and Karma for testing_

### License

*MIT*

Copyright (c) 2019 **_Zsuzsanna Mangu_**
