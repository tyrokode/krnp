import figlet from "figlet";
import { hello } from "./hello";

// const server = Bun.serve({
//     fetch() {
//     const body = figlet.textSync("BUNTIME!");
//     return new Response(body);
//     return new Response("Bun!");
//     },
//     port: 3000,
// });

const server = Bun.serve({
    fetch() {
        // the text has to be in quotations
        const body = figlet.textSync("Bun Test!");
        return new Response(body);
    }
})

console.log(`Listening on http://localhost:${server.port} ...`);