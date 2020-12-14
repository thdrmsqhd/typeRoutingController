import {createExpressServer} from "routing-controllers";


const app = createExpressServer({
    controllers:[],
})

app.listen(3000);

console.log("server is running on http://localhost:3000");