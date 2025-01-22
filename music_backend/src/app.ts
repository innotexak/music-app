import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import packageJson from '../package.json' assert { type: "json" };
import router from './route.js';
import passport from 'passport';
import session from 'express-session';
import db from './config/database.js';
import { isDev, PORT } from './config/config.js';

const app = express();

// Connect to the database
new db(console).connect(process.env.MONGO_URL);

// Session setup
app.use(session({ 
  secret: 'your-session-secret', 
  resave: false,
  saveUninitialized: true 
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// CORS configuration
const origin = [];
if (isDev) {
  origin.push("http://localhost:3000");
}

const corsOptions = {
  origin,
  credentials: true,
};

app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.json()); // Add middleware to parse JSON body
app.use(express.urlencoded({ extended: true })); // For URL-encoded data

// Base route
app.get("/", async (req, res) => {
  res.json({ name: packageJson.name, version: packageJson.version });
});

// API routes
app.use('/api/v1', router);

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}`);
});
