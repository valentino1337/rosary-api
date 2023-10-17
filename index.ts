import * as fs from 'fs' //na parse json files mysteries

const currentDate = new Date()
const dayOfWeek = currentDate.getDay()

const joyfulRosary = JSON.stringify(JSON.parse(fs.readFileSync('mysteries/joyful.json', 'utf-8')))
const sorrowfulRosary = JSON.stringify(JSON.parse(fs.readFileSync('mysteries/sorrowful.json', 'utf-8')))
const luminousRosary = JSON.stringify(JSON.parse(fs.readFileSync('mysteries/luminous.json', 'utf-8')))
const gloriousRosary = JSON.stringify(JSON.parse(fs.readFileSync('mysteries/glorious.json', 'utf-8')))

function whichRosary() {
  if (dayOfWeek === 0 || dayOfWeek === 3) {return new Response('{ "status": "success", rosary: "Glorious"}', {status:200})}
  else if (dayOfWeek === 1 || dayOfWeek === 6) {return new Response('{ "status": "success", rosary: "Joyful"}', {status:200})}
  else if (dayOfWeek === 2 || dayOfWeek === 5) {return new Response('{ "status": "success", rosary: "Sorrowful"}', {status:200})}
  else if (dayOfWeek === 4) {return new Response('{ "status": "success", rosary: "Luminous"}', {status:200})}
}

function whichRosaryMysteries() {
  if (dayOfWeek === 0 || dayOfWeek === 3) {return new Response(gloriousRosary, {status:200})}
  if (dayOfWeek === 1 || dayOfWeek === 6) {return new Response(joyfulRosary, {status:200})}
  if (dayOfWeek === 2 || dayOfWeek === 5) {return new Response(sorrowfulRosary, {status:200})}
  if (dayOfWeek === 4) {return new Response(luminousRosary, {status:200})}
}


const server = Bun.serve({
  hostname: "0.0.0.0",
  port: 8084,
  fetch(request: Request) {
    const url = new URL(request.url)

    if (request.method === "GET") {
      if (url.pathname === '/api'){ return whichRosary() }
      if(url.pathname === '/api/mysteries'){ return whichRosaryMysteries()}
      if (url.pathname === '/api/mysteries/joyful'){ return new Response(joyfulRosary)}
      if (url.pathname === '/api/mysteries/sorrowful'){ return new Response(sorrowfulRosary)}
      if (url.pathname === '/api/mysteries/luminous'){ return new Response(luminousRosary)}
      if (url.pathname === '/api/mysteries/glorious'){ return new Response(gloriousRosary)}

      else { return new Response('Wrong API endpoint.', {status: 404})}
    }

    else {
      // if method isnt GET
      return new Response("Method Not Allowed", {status: 405})
    }
  },
})