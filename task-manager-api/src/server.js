// src/server.js
const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Create a MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',        // Your MySQL username
    password: 'password',// Your MySQL password
    database: 'task_manager_db'
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database');
});

// CRUD API routes

// Create a new user
app.post('/users', (req, res) => {
    const { name, email } = req.body;
    const query = 'INSERT INTO Users (name, email) VALUES (?, ?)';
    db.query(query, [name, email], (err, result) => {
        if (err) {
            return res.status(500).send('Error adding user');
        }
        res.status(201).send({ userId: result.insertId });
    });
});

// Get all users
app.get('/users', (req, res) => {
    const query = 'SELECT * FROM Users';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).send('Error fetching users');
        }
        res.status(200).json(results);
    });
});

// Create a new task
app.post('/tasks', (req, res) => {
    const { user_id, title, description } = req.body;
    const query = 'INSERT INTO Tasks (user_id, title, description) VALUES (?, ?, ?)';
    db.query(query, [user_id, title, description], (err, result) => {
        if (err) {
            return res.status(500).send('Error adding task');
        }
        res.status(201).send({ taskId: result.insertId });
    });
});

// Get tasks for a specific user
app.get('/tasks/:userId', (req, res) => {
    const userId = req.params.userId;
    const query = 'SELECT * FROM Tasks WHERE user_id = ?';
    db.query(query, [userId], (err, results) => {
        if (err) {
            return res.status(500).send('Error fetching tasks');
        }
        res.status(200).json(results);
    });
});

// Update a task
app.put('/tasks/:taskId', (req, res) => {
    const taskId = req.params.taskId;
    const { title, description, status } = req.body;
    const query = 'UPDATE Tasks SET title = ?, description = ?, status = ? WHERE task_id = ?';
    db.query(query, [title, description, status, taskId], (err, result) => {
        if (err) {
            return res.status(500).send('Error updating task');
        }
        res.status(200).send('Task updated');
    });
});

// Delete a task
app.delete('/tasks/:taskId', (req, res) => {
    const taskId = req.params.taskId;
    const query = 'DELETE FROM Tasks WHERE task_id = ?';
    db.query(query, [taskId], (err, result) => {
        if (err) {
            return res.status(500).send('Error deleting task');
        }
        res.status(200).send('Task deleted');
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
