import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import {
    FastifyAdapter,
    NestFastifyApplication,
} from "@nestjs/platform-fastify";
import { AppModule } from "./app.module";

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(
        AppModule,
        new FastifyAdapter(),
    );

    // Automaticaly launch data validation
    app.useGlobalPipes(new ValidationPipe());

    await app.listen(3000);
    console.log(`App launched on ${await app.getUrl()}`);
}
bootstrap();
