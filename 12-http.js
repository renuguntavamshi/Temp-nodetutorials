const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end("We are in home page")
    }
if(req.url==='/about'){
        res.end("We are in about page")
    }
res.end(`
    <h1>Opps</h1>
    <p>We can't seem to find the page that you are looking for</p>
    <a href="/">Back home </a>
    `)
})

server.listen(5000)