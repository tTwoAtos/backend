import { Controller, Get, Param } from "@nestjs/common";
import { Product } from "src/interfaces/stock/product.interface";
import { ProductService } from "src/services/product/product.service";
import { ProducShowValidation } from "src/validators/product.show.validation";

@Controller("products")
export class ProductController {
    constructor(private productService: ProductService) {}

    @Get(":code")
    show(@Param("code") params: ProducShowValidation): Promise<Product> {
        return this.productService.getProduct(params.code);
    }
}
