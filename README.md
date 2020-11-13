# Coin-africa

Project link: https://coin-africa.vercel.app/

## Application setup

- Clone the application `git clone https://github.com/enodi/coin-africa.git`

* Open a new tab on your terminal
* Navigate to the application root directory e.g `$ cd coin-africa`
  - run `yarn install` to install project dependencies
  - create a .env file
  - add your Github user access token to the `.env` file created. See an example of the content of .env file in .env.txt
  - run `yarn start-dev` to start the application
* Navigate to the app on your [browser](http://localhost:3000)
* Enjoy!

### Requirements

#### Using Github GraphQL API, implement recreate the Github profile page:

I built the Github profile page by dividing the page into two sections i.e user and repositories sections, and displayed the content gotten from the API in it's respective section. I implemented this by creating elements(divs, p, spans etc) using vanilla JS, and displaying content from the API in the element created.
