
import express from 'express';
import bodyParser from 'body-parser';
import { connect } from 'mongoose';
import cors from 'cors';
const app = express();

// Import routes
import authRoutes from './routes/authRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import taskRoutes from './routes/taskRoutes.js';
import memberRoutes from './routes/memberRoutes.js';

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
const dbURI = 'mongodb+srv://rajgohel0003:tzS0rkZM5khASD69@cluster0.ohmcsj1.mongodb.net/?retryWrites=true&w=majority'; // Replace with your MongoDB connection URI
connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server after successful database connection
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Routes
app.use('/api', authRoutes); // Authentication routes (login, register, etc.)
app.use('/api/projects', projectRoutes); // Project-related routes
app.use('/api/tasks', taskRoutes); // Task-related routes
app.use('/api/members', memberRoutes); // Member-related routes

// Handle 404 Not Found
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// Handle errors
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Server Error' });
});
