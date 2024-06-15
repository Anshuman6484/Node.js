const http = require('http')

const server = http.createServer((req, res) => {
  //   console.log(req)     // Gaint object

  // Use if-else for multiple responses

  if (req.url === '/') res.end('Welcome to our home page')
  else if (req.url === '/about') res.end('Welcome to our about page')
  else {
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href='/'>Home</a>
    `)
  }
  //   res.write('Welcome to our application')
  //   res.end()
})

// req - request by the user
// res - response by the server

server.listen(5000)
