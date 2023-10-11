// TODO dorobit /api/mysteries 

const currentDate = new Date()
const dayOfWeek = currentDate.getDay()

const server = Bun.serve({
  hostname: "127.0.0.1",
  port: 8084,
  fetch(request: Request) {
    if (request.method === "GET") {
      if (request.url.endsWith("/api")){//klasicky request
        if (dayOfWeek === 0) {
          return new Response('{ "status": "success", "day": "Sunday", rosary: "Glorious"}', {status:200})
        }
        else if (dayOfWeek === 1) {
          return new Response('{ "status": "success", "day": "Monday", "rosary": "Joyful" }', {status:200})
        }
        else if (dayOfWeek === 2) {
          return new Response('{ "status": "success", "day": "Tuesday", "rosary": "Sorrowful" }', {status:200})
        }
        else if (dayOfWeek === 3) {
          return new Response('{ "status": "success", "day": "Wednesday", "rosary": "Glorious" }', {status:200})
        }
        else if (dayOfWeek === 4) {
          return new Response('{ "status": "success", "day": "Thursday", "rosary": "Luminous" }', {status:200})
        }
        else if (dayOfWeek === 5) {
          return new Response('{ "status": "success", "day": "Friday", "rosary": "Sorrowful" }', {status:200})
        }
        else if (dayOfWeek === 6) {
          return new Response('{ "status": "success", "day": "Saturday", "rosary": "Joyful" }', {status:200})
        }
      }
      else { return new Response('Not found', {status: 404})}
    }

    else {
      // if method isnt GET
      return new Response("Method Not Allowed", {status: 405})
    }
  },
})
