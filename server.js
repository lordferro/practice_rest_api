const app = require('./app')

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`Server running. Use our API on port: ${PORT}`);
});
