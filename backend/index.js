// const connectToMongo = require('./db')
// const express = require('express')

// connectToMongo()


// const app = express()
// const port = process.env.PORT || 5000


// app.use((req, res, next) => {
//   res.setHeader(
//     "Access-Control-Allow-Origin",
//     "*"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers, auth-token"
//   );
//   res.setHeader("Access-Control-Allow-Credentials", true);
//   res.setHeader("Access-Control-Allow-Private-Network", true);
//   //  Firefox caps this at 24 hours (86400 seconds). Chromium (starting in v76) caps at 2 hours (7200 seconds). The default value is 5 seconds.
//   res.setHeader("Access-Control-Max-Age", 7200);

//   next();
// });

// app.use(express.json())
// app.use('/api/recipe' , require('./routes/recipe'))
// // app.use('/api/auth' , require('./routes/auth'))

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })




const connectToMongo = require('./db');
const express = require('express');

connectToMongo();

const app = express();
const port = process.env.PORT || 5000;

// Middleware to handle CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', process.env.CULINARYCREST_APP_FRONTEND_URL);
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(204).send(); // No Content
  }

  next();
});

app.use(express.json());
app.use('/api/recipe', require('./routes/recipe'));
// app.use('/api/auth', require('./routes/auth'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
