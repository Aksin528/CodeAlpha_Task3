const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');

const app = express();
const PORT = 3000;

// Fake user database (intentionally insecure for audit)
let users = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'supersecretkey',
  resave: false,
  saveUninitialized: true
}));

// Serve static CSS
app.use(express.static(path.join(__dirname, 'public')));

// Home page
app.get('/', (req, res) => {
  res.render('index', { user: req.session.user });
});

// Register page
app.get('/register', (req, res) => {
  res.render('register');
});

app.post('/register', (req, res) => {
  const { username, password } = req.body;
  users.push({ username, password });
  console.log(users); 
  res.redirect('/login');
});

// Login page
app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    req.session.user = user;
    res.redirect('/dashboard');
  } else {
    res.send('❌ Invalid username or password');
  }
});

// Dashboard
app.get('/dashboard', (req, res) => {
  if (!req.session.user) return res.redirect('/login');
  res.render('dashboard', { user: req.session.user });
});

// Logout
app.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
