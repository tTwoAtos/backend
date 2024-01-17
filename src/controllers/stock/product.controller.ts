import { Controller, Get, Param } from "@nestjs/common";
import { Product } from "src/interfaces/stock/product.interface";
import { ProductService } from "src/services/product/product.service";

@Controller("products")
export class ProductController {
    constructor(private productService: ProductService) {}

    @Get("/:code")
    show(@Param("code") code: string): Promise<Product> {
        return this.productService.getProduct(code);
    }
}
