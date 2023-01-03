import mongoose from 'mongoose';
import {ERR_DB} from '../constants/index.js';
// Función para conectarse a la base de datos de MongoDB Atlas
const ConnectToDatabase = async () => {
  try {
    mongoose.set('strictQuery', true);
    // Conectamos a la base de datos con Mongoose
    await mongoose.connect(
      process.env.DB_CONECTION,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log('Conexión a la base de datos exitosa');
    return true;
  }
  // Si ocurre un error al conectarse a la base de datos, manejamos el error
  catch (error) {
    console.error(ERR_DB, error);
    return false;
  }
};
export default ConnectToDatabase;