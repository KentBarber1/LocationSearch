# LocationSearch

LocationSearch is a web application to find restaurants within a certain radius of an inputted (latitude, longitude) coordinate. 

The app includes a landing page, where users are required to sign in or create an account (on a separate page) in order to access the actual search feature. When the user clicks the login button there are 4 outcomes:
1. Error message: occurs when the username and/or password field is left empty.
2. Error message: occurs when the username does match any create accounts.
3. Error message: occurs when the password does not match the username (but the username exists).
4. The inputted credentials are an existing and matching pair, the user successfully logs in and gets redirected to the search page.

When the user clicks the "create account" button, there are 3 outcomes
1. Error message: occurs when the username and/or password field is left empty.
2. Error message: occurs when the username is already taken.
3. The inputted account details are valid, the user is redirected to the search page.

On the search page, the user must input a latitude and longitude, in degree coordinates, and a radius in meters. Pressing "go" results in a table containing the name, rating, and price point of the restaurants within that radius. An interactive map also contains a pin at each restaurant's location, which, when clicked, displays the same information for that specific restaurant. The logout button brings the user back to the landing page.

Our backend is deployed at https://key-acronym-361517.uc.r.appspot.com
Unfortunately, we had trouble with the serviceAccountKey.json file in deployment, thus calls to HTTP to access the database do not work from this server. However, a mock GET call to https://key-acronym-361517.uc.r.appspot.com/ returns "hello", inidicating that the deploy itself did work.

Our backend does work when operating on a local server. The API calls are as follows

GET to /users/find-user/{username}
Takes the username and checks the database to see if that username exists yet. Returns a boolean.

GET to /users/match-credentials/{username}
Takes a username and returns the corresponding password from the database. Returns a list of strings containing one entry - essentially returns a string (to be easily read by Fetch API in frontend).

POST to /users/new-user
Body:
{
  "username": string,
  "password": string
}
Creates a new user (username-password) pair in the database.

Since the application is not fully deployed, the code can currently only be run by running the server locally from the terminal, and visiting https://alexisalexislee.github.io/proj1Front/login.html to interact with the interface.
