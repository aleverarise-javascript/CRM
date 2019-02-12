import mongoose from "mongoose";

mongoose.Promise = global.Promise;

mongoose.connect(
  "mongodb://localhost/clientes",
  { useNewUrlParser: true }
);

// SCHEMA DE CLIENTES
const clientesSchema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  empresa: String,
  email: String,
  edad: Number,
  tipo: String,
  pedidos: Array,
  emails: Array
});

const Clientes = mongoose.model("clientes", clientesSchema);
export { Clientes };
