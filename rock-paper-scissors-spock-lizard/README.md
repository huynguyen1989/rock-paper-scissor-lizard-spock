# Solution for calculating 


<!-- // Factorial !n
// n! = n × (n - 1) × (n - 2) × (n - 3) × ... × 1
// 2 players and 3 choices
// 3(player-1 choices (3)) 3(player-2 choice(3)) = 3x3=9


// Didn't read much of the thread, but here's an equation I made for Rock-Paper-Scissors:

// sqrt(3.0)*sin(theta)/(2+cos(theta))

// Theta the difference between combatants and is in radians. Rock = 0, Scissors = (2*pi)/3, Paper = (4*pi)/3. 1 = total victory, -1 total defeat. Intermediate combatants produce intermediate results.



// radians = degrees × (π / 180)

// or

// radians = degrees × π/180

// This formula can be used to convert any angle from degrees to radians.

// For example, to convert 360 degrees to radians, you would use:

// radians = 360 × (π / 180)
// = 360 × π/180
// = 2π

// So, 360 degrees is equal to 2π radians.

// 360 
// ∘
//  =2π rad


// A 5x5 matrix represents a game with 5 possible choices for each player. To calculate the total number of possible cases, we can multiply the number of choices for each player:

// 5 (Player 1's choices) × 5 (Player 2's choices) = 5 × 5 = 25

// So, there are 25 possible cases in a 5x5 matrix.

// Here is the 5x5 matrix:

// |  		| A | B | C |	 D |	E |
// | --- | --- | --- | --- | --- | --- |
// | A | A-A | A-B | A-C | A-D | A-E |
// | B | B-A | B-B | B-C | B-D | B-E |
// | C | C-A | C-B | C-C | C-D | C-E |
// | D | D-A | D-B | D-C | D-D | D-E |
// | E | E-A | E-B | E-C | E-D | E-E |

// Each cell in the matrix represents a possible case, and the rows and columns represent the choices of Player 1 and Player 2, respectively.

// Note that this calculation assumes that the game is symmetric, meaning that the choices are the same for both players. If the game is asymmetric, the number of possible cases may be different.


// SOLUTION:
// 2-D Array from π/3*rad 2π/3*rad π 4π/3*rad 5π/6*rad 2π*rad
// If Choice-1 === choice-2 => Draw
// If |choice-1 - choice-2|   == 60 => choice-1 win
// If |choice-2 - choice-1|   == 60 => choice-2 win
// If choice-1 - 2π/3*rad = choice-2 => chocie-1 win
// 2π 	* rad   = 360
// 2π/3 * rad 	= 120 deg
// π/3 	* rad  	= 60  deg
// 1 Radian = 180/π  = 57.296 Deg
 -->

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

# Current status

The project still in progress for bonus feature please checkout back to previous commit to see the original one.



