## Developing a memory game

## Technologies & Tools Used

HTML
CSS
JavaScript
Git & GitHub

## Wirefram: Included in the wireframe folder

## pseudocode

1. Initialize the game:

   - Create an array called "cards" to hold the card objects.
   - Set the "movesCount" and "matchedCount" variables to 0.
   - Set the "seconds" variable to 90 to represent a countdown of 1 and a half minutes.
   - Initialize the "countdownInterval" variable to null.

2. When a card is clicked:

   - Implement the logic for handling a card click event.

3. Start the game:

   - Reset the "movesCount" and "matchedCount" variables to 0.
   - Reset the "seconds" variable to 90.
   - Shuffle the card objects in the "cards" array.
   - Render the initial game board.
   - Hide the game controls.
   - Show the "stop" button.
   - Start the countdown timer.

4. Stop the game:

   - Show the game controls.
   - Hide the "stop" button.
   - Clear the countdown interval.

5. Start the countdown timer:

   - Set a timer to repeat every 1 second.
   - Decrement the "seconds" variable by 1.
   - If the "seconds" variable reaches 0, stop the countdown timer.
   - Format and display the remaining time.

6. Render the game board:

   - Implement the logic to render the game board based on the current state of the card objects.

7. Shuffle the cards:

   - Implement a function to shuffle the card objects in the "cards" array.

8. Generate random cards:
   - Implement a function to generate a random set of cards based on the desired size.

## Summary

- As this was my first time creating a project using javascript, html and css in a tight timeframe, I experienced difficulties along the way particularly on making my game have different levels and also creating the card logic.
  Learning through different tutorials helped me understand the concepts better.

## Future developments/improvements

- making other levels where the grids increase whilst also increasing the timer
- making it more visually appealing
- create a leaderboard screen

## References

-"developbyed" https://youtube.com/watch?v=-tlb4tv4mC4
-"code with ania kubow" https://www.youtube.com/watch?v=tjyDOHzKN0w
