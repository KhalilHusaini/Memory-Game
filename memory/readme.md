## Developing a memory game

This game is a classic memory game where players need to match pairs of cards with the same image. It's a fun and challenging game that tests your memory skills.

## Technologies & Tools Used

HTML
CSS
JavaScript
Git & GitHub

## Wireframe: Included in the wireframe folder

## pseudocode

1. Get references to various HTML elements used in the game, such as the moves counter, timer, start/stop buttons, game container, result message, and controls container.

2. Declare variables to store the game state, including the game cards, interval ID for the timer, and the currently flipped cards.

3. Define an array of items, where each item has a name and an image path.

4. Initialize variables for seconds (starting at 60), moves count, win count, and the size of the game grid.

5. Implement the `timeGenerator` function:

   - Decrement the seconds by 1.
   - If seconds becomes less than 0, clear the interval, display "Time's up!" in the timer element, and call the `handleGameOver` function.
   - Calculate the minutes and seconds value from the remaining seconds.
   - Format the time display as a string and update the timer element.

6. Implement the `movesCounter` function:

   - Increment the moves count by 1.
   - Update the moves counter display with the new moves count.

7. Implement the `generateRandom` function:

   - Create a temporary copy of the items array.
   - Create an empty array called cardValues to store randomly selected item values.
   - Calculate the number of cards needed based on the provided size.
   - Iterate from 0 to the card count:
     - Generate a random index between 0 and the length of the temporary array minus 1.
     - Retrieve the item at the random index and add it to the cardValues array.
     - Remove the selected item from the temporary array.
   - Return the cardValues array.

8. Implement the `shuffleGenerator` function:
   - Clear the game container.
   - Duplicate the cardValues array.
   - Shuffle the cardValues array randomly.
   - Iterate from 0 to the card count:
     - Create a card container element with a data-card-value attribute set to the name of the card value.
     - Append a "before-pic" and an "after-pic" div inside the card container.
     - Set the image source in the "after-pic" div to the image path of the card value.
     - Append the card container to the game container.
   - Set the grid template columns in the game container based on the size of the grid.
   - Retrieve all card containers and assign them to the cards variable.
   - Add click event listeners to each card container:
     - If the card is not already matched:
       - Add the "flipped" class to the card.
       - If no card is currently flipped (firstCard is false):
         - Set the clicked card as the firstCard.
         - Get the value of the firstCard and store it in firstCardValue.
       - Otherwise (secondCard is being flipped):
         - Increment the moves count by calling the movesCounter function.
         - Set the clicked card as the secondCard.
         - Get the value of the secondCard and store it in secondCardValue.
         - If the values of firstCardValue and secondCardValue are equal:
           - Add the "matched" class to both firstCard and secondCard.
           - Set firstCard and secondCard to false.
           - Increment the win count and check if the player has won the game.
         - Otherwise (the flipped cards don't match):
           - Temporarily store firstCard and secondCard in variables tempFirst and tempSecond.
           - Set firstCard and secondCard to false.
           - After a short delay (800ms):
             - Remove the "flipped" class from tempFirst and tempSecond.
             - Reset firstCard and secondCard

to false.

9. Implement the `startGame` function:

   - Reset the moves count and seconds.
   - Hide the controls container and show the stop button while hiding the start button.
   - Start the timer by setting the interval ID and calling the timeGenerator function every second.
   - Initialize the moves counter display.
   - Call the initialize function to set up the game.

10. Implement the `stopGame` function:

- Show the controls container and hide the stop button while showing the start button.
- Clear the interval to stop the timer.
- Display the welcome title.

11. Implement the `initialize` function:

- Clear the result message.
- Reset the win count.
- Generate random card values using the generateRandom function.
- Shuffle and generate the game cards using the shuffleGenerator function.

12. Implement the `handleGameOver` function:

- Display the "Game Over" message in the result element.
- Stop the game by calling the stopGame function.
- Hide the welcome title.

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

- fisher-yates algorithm
