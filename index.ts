import routePath from "./routes/index.route";
//server init
const server = Bun.serve({
  port: process.env.PORT||3002,
  fetch(req) {    
    const url = new URL(req.url);    
    const res = routePath(url.pathname);      
    return new Response(res)
  }
})

console.log(`Listening on port ${server.port}`);
