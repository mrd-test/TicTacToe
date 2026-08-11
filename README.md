Tic-Tac-Toe

A simple and interactive Tic-Tac-Toe game built with React and JavaScript.

Click here to try: https://mrd-test.github.io/TicTacToe/

Preview:

<img width="900" height="635" alt="demo1" src="https://github.com/user-attachments/assets/a2d64b54-8316-4b4a-930f-d0a2d211880f" />



Features
🎮 Two-player gameplay
🔄 Restart the game at any time
🏆 Detects winners automatically
🤝 Detects draws
⚡ Fast and responsive interface
📱 Works on desktop and mobile devices


Built With
React
JavaScript
CSS
Vite
Getting Started
1. Clone the repository
git clone https://github.com/mrd-test/TicTacToe.git
2. Navigate to the project
cd TicTacToe
3. Install dependencies
npm install
4. Start the development server
npm run dev

The application will be available at the local development URL shown in your terminal.

How to Play
Player 1 plays as X.
Player 2 plays as O.
Players take turns selecting an empty cell.
The first player to get three symbols in a row wins.
If all cells are filled and nobody wins, the game ends in a draw.
Use the Restart button to start a new game.
Project Structure
tic-tac-toe/
├── public/
├── src/
│   ├── components/
                    ├──Cell.jsx
                    ├──Display.jsx
                    ├──Title.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── index.html
├── package.json
└── README.md
Available Scripts
Command	Description
npm run dev	Starts the development server
npm run build	Creates a production build
npm run preview	Previews the production build
What I Learned

This project helped me practice:

React components
State management with useState
Handling user interactions
Conditional rendering
Working with arrays and game logic
Organizing a small React application
License

This project is open source and available under the MIT License.
