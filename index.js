const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');

/* Cors Configuration */
const whitelist = [
    'http://localhost:80',
    'http://localhost',
    'http://localhost:8080',
    'http://127.0.0.1:8080'
  ];
  
  
app.use(cors({
    origin: (origin, callback) => {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error(origin + 'Not allowed by CORS'));
      }
    },
    credentials: true
  }));

app.use('/auth', require('./utils/auth'));

const PORT = 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));