const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

const cookies = [
  { id: 1, name: "Chocolate Chip Cookie", level: "beginner", rating: "10/10" },
  { id: 2, name: "Peanut Butter Blossom Cookie", level: "intermediate", rating: "8/10" },
  { id: 3, name: "Snickerdoodle Cookie", level: "beginner", rating: "9/10" },
  { id: 4, name: "Red Velvet Crumble Cookie", level: "advanced", rating: "9/10" },
  { id: 5, name: "Double Chocolate Chip Cookie", level: "beginner", rating: "8/10" },
];

app.get('/api/cookies', (req, res) => {
  res.json(cookies);
});

// If you’re not serving React from this backend, you can skip the following lines
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
