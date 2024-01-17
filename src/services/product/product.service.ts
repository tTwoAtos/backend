import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { OpenFoodFactService } from "../open-food-fact/open-food-fact.service";
import { Product } from "./../../interfaces/stock/product.interface";

@Injectable()
export class ProductService {
    async getProduct(code: string): Promise<Product> {
        // if product exist in DB
        // Not implemented

        return this.getProductFromFoodFact(code);
    }

    async getProductFromFoodFact(code: string): Promise<Product> {
        const openFoodFact: OpenFoodFactService = new OpenFoodFactService(
            new HttpService(),
        );

        const product = await openFoodFact.getProduct(code);

        return product;
    }
}
