import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import databaseConfig from "./configs/database.config";
import globalConfig from "./configs/global.config";
import { ProductController } from "./controllers/stock/product.controller";
import { OpenFoodFactService } from "./services/open-food-fact/open-food-fact.service";
import { ProductService } from "./services/product/product.service";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [databaseConfig, globalConfig],
            envFilePath: [".env"],
        }),
        HttpModule.register({
            timeout: 5000,
            maxRedirects: 5,
        }),
        HttpModule.registerAsync({
            useFactory: () => ({
                timeout: 5000,
                maxRedirects: 5,
            }),
        }),
    ],
    controllers: [ProductController],
    providers: [OpenFoodFactService, ProductService],
})
export class AppModule {}
