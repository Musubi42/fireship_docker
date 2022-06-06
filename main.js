const app = require('express')();

app.get('/', (req, res) =>
{
  res.json({message: 'Docker is Easy'})
})

const port = process.env.PORT || 8080;

app.listen(port, () => console.log('App started'))