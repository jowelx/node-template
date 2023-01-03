import cors from "cors";
import morgan from "morgan";
import express from "express";
import bodyParser from "body-parser";
import Dotenv from "dotenv";
import { Options } from "./config/Cors.js";
import { FileSize, Port, ApiName } from "./config/Server.js";
import Routes from "./routes/routes.js";
import {SERVER_RUNNING} from './constants/index.js'
const app = express();

const startServer = () => {
  // Permite que la aplicación maneje solicitudes con cuerpo en formato urlencoded
  app.use(bodyParser.json({ limit: `${FileSize}` }));
  app.use(bodyParser.urlencoded({ limit: `${FileSize}`, extended: true }));
  // Configura CORS para la aplicación
  app.use(cors({ origin: Options }));
  // Carga las variables de entorno desde el archivo .env
  Dotenv.config();
  // Permite que la aplicación maneje solicitudes con cuerpo en formato JSON
  app.use(express.json());
  // Registra las solicitudes HTTP que llegan a la aplicación
  app.use(morgan("dev"));
  // Configura una ruta base para todas las rutas de Overfox
  app.use(`/${ApiName}/api`, Routes);
  // Inicia el servidor de express en el puerto especificado
  app.listen(Port, () => {
    console.log(`${SERVER_RUNNING} ${Port}`);
  });
};

export default startServer;
