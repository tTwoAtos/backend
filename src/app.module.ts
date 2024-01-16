import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import databaseConfig from "./configs/database.config";
import { StockController } from "./controllers/stock/stock.controller";
import { StockService } from "./services/stock/stock.service";
import { OpenFoodFactService } from "./services/open-food-fact/open-food-fact.service";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [databaseConfig],
            envFilePath: [".env"]
        })
    ],
    controllers: [AppController, StockController],
    providers: [AppService, StockService, OpenFoodFactService]
})
export class AppModule {}
