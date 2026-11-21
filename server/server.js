require('dotenv').config(); // must be first

const express = require('express');
const helmet = require('helmet');
const connectDB = require('./db');
const errorHandler = require('./middleware/errorHandler');

const app = express();
app.use(helmet());
app.use(express.json());

app.get('/api/health', (req, res) => res.send('ok'));

// ---- routes go here (auth, customers, entries, dashboard, statement) ----

app.use(errorHandler); // always last

const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});