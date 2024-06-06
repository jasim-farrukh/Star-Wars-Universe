# Star Wars Planets Explorer
Follow the following instructions to run the application

# Setup Instructions
- cd star-wars-planets

- Backend Setup

    cd backend
    Install dependencies:
    npm install
    Start the backend server:

    npx ts-node src/server.ts
    The backend server will start and run on http://localhost:3000.

- Frontend Setup

    cd frontend
    Ensure the proxy field is set in package.json:
    {
    "proxy": "http://localhost:3000"
    }

    Install dependencies:
    npm install
    Start the React development server:

    npm start

The frontend server will start and open the application in your default web browser at http://localhost:3000.

Verify the Application
Open your browser and go to http://localhost:3000.

You should see the list of planets from the Star Wars API.
Click on a planet to see its details, including the residents.

Additional Information

- The backend fetches data from the Star Wars API and serves it to the frontend.
- The frontend displays the list of planets and their details using React components.
- Basic styling is added to improve the appearance of the application.