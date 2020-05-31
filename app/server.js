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
    const home = {
        title: 'Tairone'
    }

    return res.render('home', {item: home})
})

server.use(function(req, res) {
    res.status(404).render('not-found')
})

server.listen(5001, function() {
    console.log('server is running in port 5001')
})