const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.set('view engine', 'njk')

server.use(express.static('public'))
server.use(express.static('assets'))

nunjucks.configure('views', {
    express: server,
    autoescape: false
})

server.get('/', function(req, res) {
    foods.sort(function(a, b) {
        if (a.accessed > b.accessed) {
            return -1
        } else if (a.accessed < b.accessed) {
            return 1
        }
        return 0
    })

    const foodsAccessed = foods.slice(0, 4)

    return res.render('home', {items: foodsAccessed})
})

    return res.render('home', {item: home})
})

server.use(function(req, res) {
    res.status(404).render('not-found')
})

server.listen(5001, function() {
    console.log('server is running in port 5001')
})