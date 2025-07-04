import express from "express";
import routes from "./routes/route";
import cors from "cors";
import CorsConfig from "./configs/corsConfig";
const app = express();

const PORT = 8080;
//middlewares
app.use(express.json());
app.use(cors(CorsConfig));
//routes
app.use(routes);
app.listen(PORT, () => {
  console.log("SERVER running on PORT ", PORT);
});
