JavaScript Assignment


Overview

In this assignment, you'll create one of two possible computer games: Word Guess or Psychic. These apps will run in the browser, and feature dynamically updated HTML and CSS powered by your JavaScript code.


Commits

Having an active and healthy commit history on GitHub is important for your future job search. It is also extremely important for making sure your work is saved in your repository. If something breaks, committing often ensures you are able to go back to a working version of your code.



Committing often is a signal to employers that you are actively working on your code and learning.


We use the mantra “commit early and often.”  This means that when you write code that works, add it and commit it!
Numerous commits allow you to see how your app is progressing and give you a point to revert to if anything goes wrong.



Be clear and descriptive in your commit messaging.


When writing a commit message, avoid vague messages like "fixed." Be descriptive so that you and anyone else looking at your repository knows what happened with each commit.


We would like you to have well over 200 commits by graduation, so commit early and often!



Submission on BCS


Please submit both the deployed Github.io link to your homework AND the link to the Github Repository!



Before You Begin


Create a new GitHub repo called Word Guess Game or Psychic-Game, in accordance with the assignment you choose to complete. Then, clone it to your computer.
Inside your local git repository, create an index.html.
While still in your local git repo, create a directory called assets.
cd your way into the assets folder, then make three additional folders: javascript, css and images.



In the javascript folder, make a file called game.js. Use the src attribute of the script tag to link to this file, rather than embedding the code directly in your HTML document.
In the css folder, make a file called style.css.
Also in the css folder, make a file called reset.css. Paste into it the code from the Meyerweb reset stylesheet. If you opt to use Bootstrap instead of writing your own CSS, skip this step, and simply include a link to Bootstrap via CDN.
In the images folder, save whatever images you plan on using.


├── assets
|  ├── css
|  |  └── style.css
|  ├── images
|  └── javascript
|     └── game.js
└── index.html

Push the above changes to GitHub.


What to include:

1. Guess what letter I'm thinking of
2. Wins: (# of times the user has guessed the letter correctly)
3. Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)
4. Guesses Left: (# of guesses left. This will update)
5. Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)
6. When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
7. When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).