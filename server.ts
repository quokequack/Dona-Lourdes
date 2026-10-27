import express from "express";
import { ApiRouter } from "./src/apiRouter";


const app = express();
app.use(express.json());

const router = new ApiRouter();
app.use('/api', router.getRouter());

app.listen(3000, () => {
  console.log("Servidor executando em http://localhost:3000");
});