const express = require('express');
const path = require('path'); // Required for path operations
const app = express();
const port = 8585;

// Use middleware to parse JSON request bodies
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Store To-do items in memory
let todos = [];
let nextId = 1;

// Root route - serves the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Get all to-do items
app.get('/todos', (req, res) => {
  res.json(todos);
});

// Add a new to-do item
app.post('/todos', (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: 'Text is required' });
  }
  const newTodo = { id: nextId++, text, completed: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Update a to-do item's completion status
app.patch('/todos/:id', (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;
  const todo = todos.find(t => t.id == id);
  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  if (completed !== undefined) {
    todo.completed = completed;
  }
  res.json(todo);
});

// Delete a to-do item
app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex(t => t.id == id);
  if (index === -1) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  todos.splice(index, 1);
  res.status(204).end();
});

// Reorder to-do items
app.post('/todos/reorder', (req, res) => {
  const { orderedIds } = req.body;
  if (!Array.isArray(orderedIds)) {
    return res.status(400).json({ error: 'orderedIds must be an array' });
  }

  const newTodos = [];
  orderedIds.forEach(id => {
    const todo = todos.find(t => t.id == id);
    if (todo) {
      newTodos.push(todo);
    }
  });

  todos = newTodos;
  res.json(todos);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
