import express from "express";
import routes from "./routes/route";
import cors from "cors";
import CorsConfig from "./configs/corsConfig";
import { rateLimiter } from "./configs/requestLimiter";
import { haltOnTimeout, requestTimeout } from "./configs/requestTimeOutHandler";

const app = express();
const PORT = 8080;
//middlewares
app.use(express.json());
app.use(cors(CorsConfig));
app.use(rateLimiter);
//routes
app.use(routes);
app.use(requestTimeout);
app.use(haltOnTimeout);

app.listen(PORT, () => {
  console.log("SERVER running on PORT ", PORT);
});
