const app = require('./app');
const PORT = "https://crudtwo.vercel.app";

app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
