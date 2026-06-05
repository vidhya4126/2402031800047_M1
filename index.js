import express from 'express'

const app = express()

app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/', (req, res) => {
    res.send("<h1>Home page</h1>")
})

app.get('/about', (req, res) => {
    var users = [
        {name: 'John', age: 30},
        {name: 'Jane', age: 25},
        {name: 'Bob', age: 35}
    ];

    res.render('about', { 
                            title: 'About Page',
                            message: 'Welcome',
                            items: users
                    })
})

app.get('/form', (req, res) => {
    res.render('form')
})

app.listen(3001, () => {
    console.log('Server is running on port 3001')
})