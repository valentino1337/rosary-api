# rosary-api
A simple API to tell you which rosary to pray today. Built in TypeScript using [Bun](https://bun.sh). Mainly just an education project, but might come useful.\

## Installation
I suppose you know basics of Docker.
1. Make a directory somewhere in your server.
2. Create a `docker-compose.yml` file and paste in the contents of the [`docker-compose.yml`](docker-compose.yml) file in this repo.
3. `docker-compose up -d`.
_The program itself contains no timezone configuration. You need to set that manually in the container's shell._
Now, the Docker container should be running and you should be able to access `localhost:8084/api` and get 200 response.\
I recommend you put it behind some reverse proxy, I use Caddy.

## Usage
The API has 3 endpoints:
+ `/api/` - returns which rosary is to be prayed that day.
+ `/api/mysteries` - returns that day's respective rosary's all 5 mysteries - each mystery has a diffenent line to say in the Hail Mary prayer.
+ `/api/mysteries/joyful, sorrowful, luminous, glorious` - same as above mentioned, but returns a specific rosary.
All data is JSON.

## Credits
+ [Bun](https://bun.sh) is pretty cool, go check that out.
+ Our Lord and Savior Jesus Christ, through Him I have gained eternal life.
+ ChatGPT