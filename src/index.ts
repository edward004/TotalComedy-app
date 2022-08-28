import * as express from 'express'
const app = express()
app.use('/', (req: express.Request, res: express.Response) => res.send("Hello"))
app.listen(3000, () => console.log("Listening"))