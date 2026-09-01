import mongoose from "mongoose";

const dbUser = "lrsales159_db_user";
const dbPassword = "sgD2xT9MPbd1DIFN";

const connect = () => {
  mongoose.connect(
    `mongodb+srv://${dbUser}:${dbPassword}@cluster0.rjthfgc.mongodb.net/api-thegames?appName=Cluster0`,
  );
  const connection = mongoose.connection;
  connection.on("error", () => {
    console.log("Erro ao conectar com o mongoDB.");
  });
  connection.on("open", () => {
    console.log("Conectado ao mongoDB com sucesso!");
  });
};

connect();

export default mongoose;