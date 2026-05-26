const express = require('express')
const app = express()

app.listen(3001, () => {
  console.log('Successfully connected on port 3001')
})

app.get('/', (req, res) => {
    res.send("<h1>Welcome to the Home Page</h1>")
})

app.get('/about', (req, res) => {
    res.send("<h1>About Page</h1>")
})

app.get('/gallery', (req, res) => {
    res.send("<h1>Gallery Page</h1>")
})

app.get('/about/user', (req, res) => {
    res.send("<h1>User Page</h1>")
})

app.get('/random.text', (req, res) => {
    res.send("<h1>Random Page</h1>")
})

app.get('/user/:userid-:bookid', (req, res) => {
    res.send( req.params)
})

app.get('/search', (req, res) => {
    const name= req.query.name
    const age= req.query.age
    res.send(`Search results for Name: ${name}, Age: ${age}`)
})
