import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function start() {
  const PORT = process.env.PORT || 8000;
  const app = await NestFactory.create(AppModule);

  await app.listen(PORT, () => {
    app.setGlobalPrefix("/api/alfaSchool/");
    console.log("Listen Port: ", PORT);
  });
}

start();
