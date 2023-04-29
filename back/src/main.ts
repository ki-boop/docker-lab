import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function start() {
  const PORT = process.env.PORT || 8000;
  const app = await NestFactory.create(AppModule);

  await app.listen(PORT, () => {
    console.log(process.env.PORT);
    app.setGlobalPrefix("/api/alfaSchool/");

    console.log("Listen Port: ", PORT);
  });
}

start();
interface A {
  name: string;
}

interface B extends A{
  agee: string
}

class C implements A {
  name: string
}


