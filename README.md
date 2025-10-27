🌍 Wanderlust
Wanderlust is a full-stack Node.js & Express web application for creating and managing travel or property listings.
It allows users to explore destinations, add listings, and manage their own travel experiences — all powered by a modern RESTful backend and EJS-based frontend.

**Live Demo → https://wanderlust-0oy8.onrender.com/listings**

🚀 Overview
Wanderlust combines modern web technologies to deliver a clean and dynamic travel listing experience.
Built using Node.js, Express, and MongoDB, it includes user authentication, session handling, flash messages, and secure configuration management.

✨ Features
🔐 User Authentication
Register new accounts securely using Passport.js.
Log in and log out with full session handling.
Flash messages for success and error notifications.
Passwords hashed securely before storage.

🏕️ Listings Management (CRUD)
Create, Read, Update, and Delete listings easily.
Each listing includes:
Title & Description
Location (e.g., city, country)
Price or cost per night
Images or photo galleries
Clean, responsive layout for listings using EJS templates.

⚙️ Configuration & Security
Environment variables managed via dotenv for:
Database URIs
Session secrets
Server ports and credentials
Sessions are securely managed using Express-Session.

🗃️ Database Integration
MongoDB used as a NoSQL database.
Mongoose for schema definitions and validations.
Models include User and Listing.

🧭 Routing & REST Architecture
REST-style routes following modern conventions.
Route grouping for better scalability (/listings, /users, etc.).
Middleware for authentication and access control.

🧰 UX & Views
Views built with EJS (Embedded JavaScript Templates).
Dynamic and reusable components (headers, footers, forms).
Clean navigation between listing pages, edit forms, and user actions.
Flash messages for real-time user feedback.

💾 Session & Flash Support
Persistent sessions handled via Express-Session.
Flash messages provided using connect-flash for improved user experience.

🧱 Project Structure
Organized folder structure for scalability and clarity.
Static assets served from /public.
Modular route and model definitions.

🧩 Tech Stack
Category	Technologies
Backend	Node.js, Express.js
Database	MongoDB (Mongoose)
Authentication	Passport.js (Local Strategy)
Templating Engine	EJS
Styling	CSS / Bootstrap / Custom styles
Session & Flash	express-session, connect-flash
Environment Variables	dotenv
Deployment	Render.com

### Installation

```bash
Download the zip folder 
cd Wanderlust

# Install dependencies
npm install

# Run the app
node app.js
```

### Usage

* Open `http://localhost:8080`
* Register a new account or log in if you already have one.
* Create new listings via the dashboard, view existing ones, edit or delete as required.
* Explore all listings on the “Listings” page.

## Tech Stack

* Backend: Node.js + Express
* Database: MongoDB with Mongoose
* Authentication: Passport.js (local strategy)
* Templating: EJS
* Styling: (Plain CSS)
* Environment Variables: dotenv

## Directory Structure

```
/Wanderlust
│
├── /models        ← Mongoose schemas (User, Listing, etc)
├── /routes        ← Express route definitions
├── /views         ← EJS template files
├── /public        ← Static assets (images, CSS, JS)
├── app.js         ← Entry point for the Express app
└── .env           ← Environment config (not committed)
```

## Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests for enhancements or bug fixes.
Before submitting a pull request:

* Ensure any new code follows the same coding style.
* Add tests (if applicable).
* Update documentation as needed.
